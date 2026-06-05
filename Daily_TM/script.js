// ============================================
// TASKFLOW - PRODUCTION SAAS APPLICATION
// ============================================

// ============================================
// THEME SYSTEM
// ============================================

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('taskflow-theme') || 'auto';
        this.applyTheme();
        this.watchSystemTheme();
    }

    applyTheme() {
        if (this.theme === 'auto') {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        } else {
            document.documentElement.setAttribute('data-theme', this.theme);
        }
    }

    setTheme(theme) {
        this.theme = theme;
        localStorage.setItem('taskflow-theme', theme);
        this.applyTheme();
        this.updateThemeButtons();
    }

    watchSystemTheme() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (this.theme === 'auto') this.applyTheme();
        });
    }

    updateThemeButtons() {
        const buttons = document.querySelectorAll('.theme-option');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === this.theme);
        });
    }

    getCurrentTheme() {
        return this.theme;
    }
}

// ============================================
// DATA MANAGER
// ============================================

class DataManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('taskflow-users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('taskflow-currentUser')) || null;
        this.tasks = JSON.parse(localStorage.getItem('taskflow-tasks')) || [];
        this.rewards = JSON.parse(localStorage.getItem('taskflow-rewards')) || this.initializeRewards();
        this.statistics = JSON.parse(localStorage.getItem('taskflow-statistics')) || this.initializeStatistics();
    }

    initializeRewards() {
        return {
            points: 0,
            streak: 0,
            longestStreak: 0,
            badges: [],
            lastCompletedDate: null,
            level: 1
        };
    }

    initializeStatistics() {
        return {
            totalTasks: 0,
            completedTasks: 0,
            failedTasks: 0,
            rescheduledTasks: 0,
            currentStreak: 0,
            longestStreak: 0,
            totalPoints: 0
        };
    }

    saveData() {
        localStorage.setItem('taskflow-users', JSON.stringify(this.users));
        localStorage.setItem('taskflow-currentUser', JSON.stringify(this.currentUser));
        localStorage.setItem('taskflow-tasks', JSON.stringify(this.tasks));
        localStorage.setItem('taskflow-rewards', JSON.stringify(this.rewards));
        localStorage.setItem('taskflow-statistics', JSON.stringify(this.statistics));
    }

    // User Management
    registerUser(username, email, password) {
        if (this.users.find(u => u.username === username)) {
            return { success: false, message: 'Username already exists' };
        }
        if (this.users.find(u => u.email === email)) {
            return { success: false, message: 'Email already registered' };
        }
        const user = {
            id: Date.now(),
            username,
            email,
            password,
            createdAt: new Date().toISOString()
        };
        this.users.push(user);
        this.saveData();
        return { success: true, message: 'Registration successful' };
    }

    loginUser(username, password) {
        const user = this.users.find(u => (u.username === username || u.email === username) && u.password === password);
        if (!user) {
            return { success: false, message: 'Invalid credentials' };
        }
        this.currentUser = user;
        this.rewards = JSON.parse(localStorage.getItem(`taskflow-rewards-${user.id}`)) || this.initializeRewards();
        this.statistics = JSON.parse(localStorage.getItem(`taskflow-statistics-${user.id}`)) || this.initializeStatistics();
        this.tasks = JSON.parse(localStorage.getItem(`taskflow-tasks-${user.id}`)) || [];
        this.saveData();
        return { success: true, message: 'Login successful' };
    }

    logoutUser() {
        if (this.currentUser) {
            const userId = this.currentUser.id;
            localStorage.setItem(`taskflow-rewards-${userId}`, JSON.stringify(this.rewards));
            localStorage.setItem(`taskflow-statistics-${userId}`, JSON.stringify(this.statistics));
            localStorage.setItem(`taskflow-tasks-${userId}`, JSON.stringify(this.tasks));
        }
        this.currentUser = null;
        this.saveData();
    }

    // Task Management
    addTask(title, category, priority, date, time, recurring) {
        const task = {
            id: Date.now(),
            title,
            category,
            priority,
            date,
            time,
            recurring,
            completed: false,
            failed: false,
            rescheduled: false,
            createdAt: new Date().toISOString()
        };
        this.tasks.push(task);
        this.statistics.totalTasks++;
        this.saveData();
        return task;
    }

    updateTask(id, updates) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            Object.assign(task, updates);
            this.saveData();
            return task;
        }
        return null;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.statistics.totalTasks = Math.max(0, this.statistics.totalTasks - 1);
        this.saveData();
    }

    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task && !task.completed) {
            task.completed = true;
            task.failed = false;
            this.statistics.completedTasks++;
            this.rewards.points += 10;
            this.statistics.totalPoints = this.rewards.points;
            this.updateStreak();
            this.checkAchievements();
            this.saveData();
            return true;
        }
        return false;
    }

    failTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task && !task.failed) {
            task.failed = true;
            task.completed = false;
            this.statistics.failedTasks++;
            this.saveData();
            return true;
        }
        return false;
    }

    updateStreak() {
        const today = new Date().toISOString().split('T')[0];
        if (this.rewards.lastCompletedDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            if (this.rewards.lastCompletedDate === yesterdayStr) {
                this.rewards.streak++;
            } else if (this.rewards.lastCompletedDate !== today) {
                this.rewards.streak = 1;
            }
            this.rewards.lastCompletedDate = today;
            this.rewards.longestStreak = Math.max(this.rewards.longestStreak, this.rewards.streak);
            this.statistics.currentStreak = this.rewards.streak;
            this.statistics.longestStreak = this.rewards.longestStreak;
        }
    }

    checkAchievements() {
        const achievements = [
            { id: 1, name: 'First Task', icon: '🎯', condition: () => this.statistics.completedTasks >= 1 },
            { id: 2, name: 'Getting Going', icon: '🚀', condition: () => this.statistics.completedTasks >= 5 },
            { id: 3, name: 'On a Roll', icon: '🔥', condition: () => this.rewards.streak >= 3 },
            { id: 4, name: 'Unstoppable', icon: '⚡', condition: () => this.rewards.streak >= 7 },
            { id: 5, name: 'Century Club', icon: '💯', condition: () => this.statistics.completedTasks >= 100 },
            { id: 6, name: 'Master', icon: '👑', condition: () => this.rewards.points >= 500 }
        ];

        achievements.forEach(achievement => {
            if (achievement.condition() && !this.rewards.badges.find(b => b.id === achievement.id)) {
                this.rewards.badges.push(achievement);
            }
        });

        this.updateLevel();
    }

    updateLevel() {
        const { points, streak } = this.rewards;
        if (points >= 500 && streak >= 30) {
            this.rewards.level = 5; // Master
        } else if (points >= 250 && streak >= 14) {
            this.rewards.level = 4; // Expert
        } else if (points >= 100 && streak >= 7) {
            this.rewards.level = 3; // Productive
        } else if (points >= 50 && streak >= 3) {
            this.rewards.level = 2; // Consistent
        } else {
            this.rewards.level = 1; // Beginner
        }
    }

    getTasksByDate(date) {
        return this.tasks.filter(t => t.date === date).sort((a, b) => a.time.localeCompare(b.time));
    }

    getAllTasksSorted() {
        return this.tasks.slice().sort((a, b) => {
            const dateA = new Date(`${a.date}T${a.time}`);
            const dateB = new Date(`${b.date}T${b.time}`);
            return dateB - dateA;
        });
    }

    getCompletionRate() {
        if (this.statistics.totalTasks === 0) return 0;
        return Math.round((this.statistics.completedTasks / this.statistics.totalTasks) * 100);
    }

    getLevelName(level) {
        const levels = { 1: 'Beginner', 2: 'Consistent', 3: 'Productive', 4: 'Expert', 5: 'Master' };
        return levels[level] || 'Beginner';
    }
}

// ============================================
// UI MANAGER
// ============================================

class UIManager {
    constructor(dataManager, themeManager) {
        this.data = dataManager;
        this.theme = themeManager;
        this.currentPage = 'dashboard';
        this.currentFilter = 'all';
        this.editingTaskId = null;
        this.initializeEventListeners();
        this.setDefaultDate();
        this.startClockUpdate();
    }

    initializeEventListeners() {
        // Auth Forms
        document.getElementById('loginFormElement').addEventListener('submit', e => this.handleLogin(e));
        document.getElementById('registerFormElement').addEventListener('submit', e => this.handleRegister(e));
        document.querySelectorAll('.switch-form-btn').forEach(btn => {
            btn.addEventListener('click', e => this.switchAuthForm(e.target.dataset.form));
        });

        // Password visibility
        document.querySelectorAll('.toggle-password').forEach(btn => {
            btn.addEventListener('click', e => this.togglePasswordVisibility(e));
        });

        // Theme toggles
        document.getElementById('themeToggle').addEventListener('click', () => this.cycleTheme());
        document.getElementById('themeToggleApp').addEventListener('click', () => this.cycleTheme());
        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.addEventListener('click', e => this.theme.setTheme(e.target.dataset.theme));
        });

        // Sidebar Navigation
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const page = e.currentTarget.dataset.page;
                this.switchPage(page);
            });
        });

        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => this.handleLogout());

        // Task Management
        document.getElementById('addTaskBtn').addEventListener('click', () => this.openTaskModal());
        document.getElementById('addTaskBtn2').addEventListener('click', () => this.openTaskModal());
        document.getElementById('taskFormElement').addEventListener('submit', e => this.handleSaveTask(e));
        document.getElementById('modalCancel').addEventListener('click', () => this.closeTaskModal());
        document.querySelector('.modal-close').addEventListener('click', () => this.closeTaskModal());

        // Task Search & Filter
        document.getElementById('taskSearch').addEventListener('input', e => this.searchTasks(e.target.value));
        document.querySelectorAll('.filter-tab').forEach(btn => {
            btn.addEventListener('click', e => this.filterTasks(e.target.dataset.filter));
        });

        // Settings
        document.getElementById('exportDataBtn').addEventListener('click', () => this.exportData());

        // Modal backdrop
        document.getElementById('taskModal').addEventListener('click', e => {
            if (e.target.id === 'taskModal') this.closeTaskModal();
        });

        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.toggle('active');
            });
        }
    }

    handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        if (!username || !password) {
            this.showNotification('Please fill in all fields', 'error');
            return;
        }

        const result = this.data.loginUser(username, password);
        if (result.success) {
            this.showMainApp();
            this.renderDashboard();
            this.showNotification('Welcome back!', 'success');
        } else {
            this.showNotification(result.message, 'error');
        }
    }

    handleRegister(e) {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value.trim();
        const confirm = document.getElementById('registerConfirm').value.trim();

        if (!username || !email || !password || !confirm) {
            this.showNotification('Please fill in all fields', 'error');
            return;
        }

        if (password !== confirm) {
            this.showNotification('Passwords do not match', 'error');
            return;
        }

        if (password.length < 6) {
            this.showNotification('Password must be at least 6 characters', 'error');
            return;
        }

        const result = this.data.registerUser(username, email, password);
        if (result.success) {
            this.showNotification('Account created! Please sign in.', 'success');
            this.switchAuthForm('login');
            document.getElementById('registerFormElement').reset();
        } else {
            this.showNotification(result.message, 'error');
        }
    }

    switchAuthForm(form) {
        document.getElementById('loginForm').classList.toggle('active', form === 'login');
        document.getElementById('registerForm').classList.toggle('active', form === 'register');
    }

    togglePasswordVisibility(e) {
        const targetId = e.currentTarget.dataset.target;
        const input = document.getElementById(targetId);
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
    }

    cycleTheme() {
        const themes = ['auto', 'light', 'dark'];
        const current = this.theme.getCurrentTheme();
        const next = themes[(themes.indexOf(current) + 1) % themes.length];
        this.theme.setTheme(next);
    }

    handleLogout() {
        this.data.logoutUser();
        document.getElementById('authPage').style.display = 'flex';
        document.getElementById('mainApp').classList.add('hidden');
        document.getElementById('loginFormElement').reset();
        document.getElementById('registerFormElement').reset();
    }

    showMainApp() {
        document.getElementById('authPage').style.display = 'none';
        document.getElementById('mainApp').classList.remove('hidden');
    }

    switchPage(pageName) {
        this.currentPage = pageName;

        // Update nav
        document.querySelectorAll('[data-page]').forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageName);
        });

        // Update page title
        const titles = {
            dashboard: 'Dashboard',
            tasks: 'All Tasks',
            timeline: 'Timeline',
            rewards: 'Rewards & Achievements',
            analytics: 'Analytics',
            settings: 'Settings'
        };
        document.getElementById('pageTitle').textContent = titles[pageName];

        // Update content
        document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));
        document.getElementById(`${pageName}Page`).classList.add('active');

        // Close sidebar on mobile
        const sidebar = document.getElementById('sidebar');
        if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }

        // Render page
        this[`render${pageName.charAt(0).toUpperCase() + pageName.slice(1)}`]?.();
    }

    renderDashboard() {
        const today = new Date().toISOString().split('T')[0];
        const todayTasks = this.data.getTasksByDate(today);

        document.getElementById('dashTotalTasks').textContent = this.data.statistics.totalTasks;
        document.getElementById('dashCompletedTasks').textContent = this.data.statistics.completedTasks;
        document.getElementById('dashFailedTasks').textContent = this.data.statistics.failedTasks;
        document.getElementById('dashRescheduledTasks').textContent = this.data.statistics.rescheduledTasks;
        document.getElementById('dashCompletionRate').textContent = this.data.getCompletionRate() + '%';
        document.getElementById('dashCurrentStreak').textContent = this.data.rewards.streak;
        document.getElementById('dashTotalPoints').textContent = this.data.rewards.points;

        this.renderTasksList('todayTasksList', todayTasks);
    }

    renderTasks() {
        const filtered = this.currentFilter === 'all'
            ? this.data.tasks
            : this.data.tasks.filter(t => {
                if (this.currentFilter === 'completed') return t.completed;
                if (this.currentFilter === 'pending') return !t.completed && !t.failed;
                if (this.currentFilter === 'failed') return t.failed;
            });

        const container = document.getElementById('allTasksList');
        if (filtered.length === 0) {
            container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">📋</div>
          <div class="empty-state-title">No tasks</div>
          <div class="empty-state-text">Create your first task to get started</div>
        </div>
      `;
            return;
        }

        container.innerHTML = filtered.map(task => this.createTaskCard(task)).join('');
        this.attachTaskListeners(container);
    }

    renderTimeline() {
        const tasks = this.data.getAllTasksSorted();
        const container = document.getElementById('timelineContainer');

        if (tasks.length === 0) {
            container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📅</div>
          <div class="empty-state-title">No timeline entries</div>
          <div class="empty-state-text">Complete tasks to see your timeline</div>
        </div>
      `;
            return;
        }

        container.innerHTML = tasks.map(task => {
            const status = task.completed ? 'completed' : task.failed ? 'failed' : task.rescheduled ? 'rescheduled' : 'pending';
            return `
        <div class="timeline-item ${status}">
          <div class="timeline-content">
            <div class="timeline-date">${this.formatDate(task.date)} at ${task.time}</div>
            <div class="timeline-title">${this.escapeHtml(task.title)}</div>
            <span class="timeline-status ${status}">
              ${status === 'completed' ? '✓' : status === 'failed' ? '✗' : status === 'rescheduled' ? '↻' : '•'} 
              ${status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        </div>
      `;
        }).join('');
    }

    renderRewards() {
        document.getElementById('rewardPoints').textContent = this.data.rewards.points;
        document.getElementById('rewardStreak').textContent = this.data.rewards.streak;
        document.getElementById('rewardLevel').textContent = this.data.getLevelName(this.data.rewards.level);
        document.getElementById('rewardBadges').textContent = this.data.rewards.badges.length;

        const achievements = [
            { id: 1, name: 'First Task', icon: '🎯', desc: 'Complete 1 task' },
            { id: 2, name: 'Getting Going', icon: '🚀', desc: 'Complete 5 tasks' },
            { id: 3, name: 'On a Roll', icon: '🔥', desc: '3-day streak' },
            { id: 4, name: 'Unstoppable', icon: '⚡', desc: '7-day streak' },
            { id: 5, name: 'Century Club', icon: '💯', desc: 'Complete 100 tasks' },
            { id: 6, name: 'Master', icon: '👑', desc: 'Earn 500 points' }
        ];

        const container = document.getElementById('achievementsList');
        container.innerHTML = achievements.map(achievement => {
            const unlocked = this.data.rewards.badges.find(b => b.id === achievement.id);
            return `
        <div class="achievement ${!unlocked ? 'locked' : ''}">
          <div class="achievement-icon">${achievement.icon}</div>
          <div class="achievement-name">${achievement.name}</div>
          <div class="achievement-desc">${achievement.desc}</div>
        </div>
      `;
        }).join('');
    }

    renderAnalytics() {
        document.getElementById('statTotalCreated').textContent = this.data.statistics.totalTasks;
        document.getElementById('statTotalCompleted').textContent = this.data.statistics.completedTasks;
        document.getElementById('statTotalFailed').textContent = this.data.statistics.failedTasks;
        document.getElementById('statTotalRescheduled').textContent = this.data.statistics.rescheduledTasks;
        document.getElementById('statCompletionRate').textContent = this.data.getCompletionRate() + '%';

        this.renderWeeklyChart();
        this.renderDistributionChart();
    }

    renderWeeklyChart() {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const today = new Date();
        const tasksByDay = [0, 0, 0, 0, 0, 0, 0];

        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - (6 - i));
            const dateStr = date.toISOString().split('T')[0];
            tasksByDay[i] = this.data.tasks.filter(t => t.date === dateStr && t.completed).length;
        }

        const maxHeight = Math.max(...tasksByDay, 1);
        const chart = document.getElementById('weeklyChart');
        chart.innerHTML = tasksByDay.map((count, i) => `
      <div style="position: relative; flex: 1;">
        <div class="chart-bar" style="height: ${(count / maxHeight) * 250}px;">
          <div class="chart-label">${days[i]}</div>
        </div>
        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: var(--text-secondary);">${count}</div>
      </div>
    `).join('');
    }

    renderDistributionChart() {
        const total = this.data.statistics.completedTasks + this.data.statistics.failedTasks + this.data.statistics.rescheduledTasks;
        if (total === 0) {
            document.getElementById('distributionChart').innerHTML = '<p style="text-align: center; padding: 40px;">No data yet</p>';
            return;
        }

        const completed = (this.data.statistics.completedTasks / total) * 100;
        const failed = (this.data.statistics.failedTasks / total) * 100;

        const chart = document.getElementById('distributionChart');
        chart.innerHTML = `
      <div style="display: flex; gap: 20px; align-items: center; height: 250px;">
        <div style="flex: 1;">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <div style="width: 12px; height: 12px; background: #10b981; border-radius: 2px;"></div>
                <span>Completed: ${this.data.statistics.completedTasks}</span>
              </div>
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <div style="width: 12px; height: 12px; background: #ef4444; border-radius: 2px;"></div>
                <span>Failed: ${this.data.statistics.failedTasks}</span>
              </div>
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <div style="width: 12px; height: 12px; background: #f59e0b; border-radius: 2px;"></div>
                <span>Rescheduled: ${this.data.statistics.rescheduledTasks}</span>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(#10b981 0% ${completed}%, #ef4444 ${completed}% ${completed + failed}%, #f59e0b ${completed + failed}% 100%); display: flex; align-items: center; justify-content: center;">
          <div style="width: 120px; height: 120px; border-radius: 50%; background: var(--card); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 24px;">${total}</div>
        </div>
      </div>
    `;
    }

    renderTasksList(containerId, tasks) {
        const container = document.getElementById(containerId);
        if (tasks.length === 0) {
            container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">✨</div>
          <div class="empty-state-title">All clear!</div>
          <div class="empty-state-text">No tasks for today</div>
        </div>
      `;
            return;
        }

        container.innerHTML = tasks.map(task => this.createTaskCard(task)).join('');
        this.attachTaskListeners(container);
    }

    createTaskCard(task) {
        return `
      <div class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
        <div class="task-content">
          <div class="task-title">${this.escapeHtml(task.title)}</div>
          <div class="task-meta">
            <span class="task-tag">${task.category}</span>
            <span class="task-tag" style="background: ${this.getPriorityColor(task.priority)}30; color: ${this.getPriorityColor(task.priority)};">${task.priority}</span>
            <span class="task-time">${task.date} ${task.time}</span>
          </div>
        </div>
        <div class="task-actions">
          <button class="task-action-btn edit-btn" data-id="${task.id}" title="Edit">✏️</button>
          <button class="task-action-btn delete-btn" data-id="${task.id}" title="Delete">🗑️</button>
        </div>
      </div>
    `;
    }

    attachTaskListeners(container) {
        container.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', e => {
                const taskId = parseInt(e.target.dataset.id);
                if (e.target.checked) {
                    this.data.completeTask(taskId);
                    this.showNotification('Task completed! 🎉', 'success');
                } else {
                    this.data.updateTask(taskId, { completed: false });
                }
                this.renderDashboard();
                this.renderTasks?.();
            });
        });

        container.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                this.editTask(parseInt(e.target.dataset.id));
            });
        });

        container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                if (confirm('Delete this task?')) {
                    this.data.deleteTask(parseInt(e.target.dataset.id));
                    this.renderDashboard();
                    this.renderTasks?.();
                }
            });
        });
    }

    openTaskModal(taskId = null) {
        this.editingTaskId = taskId;
        const modal = document.getElementById('taskModal');

        if (taskId) {
            const task = this.data.tasks.find(t => t.id === taskId);
            document.getElementById('modalTitle').textContent = 'Edit Task';
            document.getElementById('taskTitle').value = task.title;
            document.getElementById('taskCategory').value = task.category;
            document.getElementById('taskPriority').value = task.priority;
            document.getElementById('taskDate').value = task.date;
            document.getElementById('taskTime').value = task.time;
            document.getElementById('taskRecurring').checked = task.recurring;
        } else {
            document.getElementById('modalTitle').textContent = 'Add Task';
            document.getElementById('taskFormElement').reset();
            this.setDefaultDate();
        }

        modal.classList.add('active');
    }

    closeTaskModal() {
        document.getElementById('taskModal').classList.remove('active');
        this.editingTaskId = null;
    }

    handleSaveTask(e) {
        e.preventDefault();
        const title = document.getElementById('taskTitle').value.trim();
        const category = document.getElementById('taskCategory').value;
        const priority = document.getElementById('taskPriority').value;
        const date = document.getElementById('taskDate').value;
        const time = document.getElementById('taskTime').value;
        const recurring = document.getElementById('taskRecurring').checked;

        if (!title || !category || !priority || !date || !time) {
            this.showNotification('Please fill in all fields', 'error');
            return;
        }

        if (this.editingTaskId) {
            this.data.updateTask(this.editingTaskId, { title, category, priority, date, time, recurring });
            this.showNotification('Task updated', 'success');
        } else {
            this.data.addTask(title, category, priority, date, time, recurring);
            this.showNotification('Task created', 'success');
        }

        this.closeTaskModal();
        this.renderDashboard();
        this.renderTasks?.();
    }

    editTask(taskId) {
        this.openTaskModal(taskId);
    }

    searchTasks(query) {
        const filtered = query.length === 0
            ? this.data.tasks
            : this.data.tasks.filter(t =>
                t.title.toLowerCase().includes(query.toLowerCase()) ||
                t.category.toLowerCase().includes(query.toLowerCase())
            );

        const container = document.getElementById('allTasksList');
        if (filtered.length === 0) {
            container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">🔍</div>
          <div class="empty-state-title">No results</div>
        </div>
      `;
            return;
        }

        container.innerHTML = filtered.map(task => this.createTaskCard(task)).join('');
        this.attachTaskListeners(container);
    }

    filterTasks(filter) {
        this.currentFilter = filter;
        document.querySelectorAll('.filter-tab').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.renderTasks();
    }

    exportData() {
        const data = {
            user: this.data.currentUser,
            tasks: this.data.tasks,
            rewards: this.data.rewards,
            statistics: this.data.statistics
        };
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `taskflow-export-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        this.showNotification('Data exported successfully', 'success');
    }

    setDefaultDate() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('taskDate').value = today;
        document.getElementById('taskDate').min = today;
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        document.getElementById('taskTime').value = time;
    }

    startClockUpdate() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }

    updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const clock = document.getElementById('liveClock');
        if (clock) clock.textContent = `${hours}:${minutes}`;

        this.updateGreeting();
        this.updateDateTime();
    }

    updateGreeting() {
        const hour = new Date().getHours();
        let greeting;
        if (hour < 12) greeting = 'Good morning';
        else if (hour < 18) greeting = 'Good afternoon';
        else greeting = 'Good evening';

        const greetingEl = document.getElementById('greeting');
        if (greetingEl) greetingEl.textContent = greeting;
    }

    updateDateTime() {
        const now = new Date();
        const dateString = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const dateEl = document.getElementById('currentDateTime');
        if (dateEl) dateEl.textContent = dateString;
    }

    formatDate(dateStr) {
        const date = new Date(dateStr + 'T00:00:00');
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    getPriorityColor(priority) {
        const colors = { 'High': '#ef4444', 'Medium': '#f59e0b', 'Low': '#10b981' };
        return colors[priority] || '#6366f1';
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showNotification(message, type = 'info') {
        const container = document.getElementById('notificationContainer');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;

        const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
        notification.innerHTML = `
      <div class="notification-icon">${icons[type]}</div>
      <div class="notification-text">${message}</div>
    `;

        container.appendChild(notification);
        setTimeout(() => notification.remove(), 4000);
    }
}

// ============================================
// APPLICATION INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
    const dataManager = new DataManager();
    const uiManager = new UIManager(dataManager, themeManager);

    // Check if user is logged in
    if (dataManager.currentUser) {
        uiManager.showMainApp();
        uiManager.renderDashboard();
    }

    // Expose globally for debugging
    window.app = { dataManager, uiManager, themeManager };
});

// Auto-save periodically
setInterval(() => {
    window.app?.dataManager?.saveData();
}, 60000);
