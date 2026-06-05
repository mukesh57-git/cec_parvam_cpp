/**
 * Day 7 Quiz App - Game Engine with Rooms and Persistence
 * Topic: Dynamic Memory & STL
 * Includes: Split-Screen "Sort the Vector" Puzzle Game
 */

class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playClick() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.08);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playSuccess() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.3);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.35);
    });
  }

  playFailure() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.linearRampToValueAtTime(90, now + 0.4);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);

    osc.disconnect(gain);
    osc.connect(filter);
    filter.connect(gain);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.4);

    osc.start();
    osc.stop(now + 0.45);
  }

  playSteal() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, now);
    osc1.frequency.setValueAtTime(698.46, now + 0.1);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(880, now);
    osc2.frequency.setValueAtTime(1046.50, now + 0.1);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

    osc1.start();
    osc2.start();
    osc1.stop(now + 0.4);
    osc2.stop(now + 0.4);
  }

  playTick() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.04);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playHurry() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    [0, 0.08].forEach(delay => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1500, now + delay);

      gain.gain.setValueAtTime(0.06, now + delay);
      gain.gain.linearRampToValueAtTime(0, now + delay + 0.04);

      osc.start(now + delay);
      osc.stop(now + delay + 0.05);
    });
  }

  playWin() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const arpeggio = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];

    arpeggio.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);

      gain.gain.setValueAtTime(0.1, now + idx * 0.12);
      gain.gain.linearRampToValueAtTime(0.1, now + idx * 0.12 + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.12 + 0.4);

      osc.start(now + idx * 0.12);
      osc.stop(now + idx * 0.12 + 0.5);
    });
  }
}

const sfx = new SoundFX();

const STORAGE_KEY = 'parvam_quiz_rooms_day7';
const ADMIN_PASSWORD = "ParvaM@123";
let rooms = {};
let activeRoomId = null;

let gameQuestions = [];
let currentIndex = 0;
let teamAName = "Team Alpha";
let teamBName = "Team Beta";
let teamAScore = 0;
let teamBScore = 0;
let activeTeam = "A";
let startingTeamEachRound = "A";
let isStealTurn = false;
let hasAnswered = false;
let timerValue = 30;
let timerInterval = null;
let isTimerPaused = false;
let primaryTimeLimit = 30;
let stealTimeLimit = 15;

let passwordContext = {
  roomId: null,
  action: null
};

// MINI-GAME ENGINE: "Sort the Vector"
let minigame = {
  canvas: null,
  ctx: null,
  reqId: null,
  active: false,
  width: 800,
  height: 350,
  
  // Single-press key handling
  keyState: {},
  keyPressed: {},
  
  colorA: '#06b6d4',
  colorB: '#d946ef',
  
  arrA: [],
  cursorA: 0,
  
  arrB: [],
  cursorB: 0,

  init() {
    this.canvas = document.getElementById('minigame-canvas');
    this.ctx = this.canvas.getContext('2d');
    
    window.addEventListener('keydown', e => {
      if (!this.keyState[e.code]) {
        this.keyPressed[e.code] = true;
      }
      this.keyState[e.code] = true;
    });
    
    window.addEventListener('keyup', e => {
      this.keyState[e.code] = false;
    });
    
    document.getElementById('btn-start-minigame').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('minigame-overlay').style.display = 'none';
      this.start();
    });
  },

  wasJustPressed(code) {
    if (this.keyPressed[code]) {
      this.keyPressed[code] = false;
      return true;
    }
    return false;
  },

  generateRandomArray() {
    let pool = [-99.5, 3.14, 0, -0.5, 42.1, -100, 7.5, -3.14, 15, -1, 0.99, -42, 88.8];
    let arr = [];
    let tempPool = [...pool];
    
    // Pick 5 random unique elements
    for (let i = 0; i < 5; i++) {
       let idx = Math.floor(Math.random() * tempPool.length);
       arr.push(tempPool.splice(idx, 1)[0]);
    }
    
    // Ensure it's NOT already sorted
    while (this.isSorted(arr)) {
       arr.sort(() => Math.random() - 0.5);
    }
    return arr;
  },

  isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) return false;
    }
    return true;
  },

  swap(arr, index) {
    let temp = arr[index];
    arr[index] = arr[index+1];
    arr[index+1] = temp;
  },

  reset() {
    let seed = this.generateRandomArray();
    this.arrA = [...seed];
    this.arrB = [...seed]; // Both teams get the EXACT same array
    
    this.cursorA = 0;
    this.cursorB = 0;
    this.active = false;
    this.keyPressed = {}; // clear input buffer
    
    const existingWinText = document.getElementById('win-text');
    if(existingWinText) existingWinText.remove();
    
    document.getElementById('btn-start-game').disabled = true;
    document.getElementById('minigame-overlay').style.display = 'flex';
    document.getElementById('btn-start-minigame').style.display = 'block';
    document.getElementById('btn-start-minigame').innerText = "Start Sort Challenge";
    
    if(this.reqId) cancelAnimationFrame(this.reqId);
    this.draw(); 
  },

  start() {
    this.active = true;
    this.keyPressed = {};
    this.reqId = requestAnimationFrame(() => this.loop());
  },

  loop() {
    if (!this.active) return;

    this.update();
    this.draw();

    if (this.isSorted(this.arrA)) {
      this.draw(); // Final draw to show sorted state
      this.endGame('A');
    } else if (this.isSorted(this.arrB)) {
      this.draw();
      this.endGame('B');
    } else {
      this.reqId = requestAnimationFrame(() => this.loop());
    }
  },

  update() {
    // Team A (A/D to move cursor, W to swap)
    if (this.wasJustPressed('KeyA')) {
      this.cursorA = Math.max(0, this.cursorA - 1);
      sfx.playClick();
    }
    if (this.wasJustPressed('KeyD')) {
      this.cursorA = Math.min(3, this.cursorA + 1); // Max 3 because it swaps i and i+1
      sfx.playClick();
    }
    if (this.wasJustPressed('KeyW')) {
      this.swap(this.arrA, this.cursorA);
      sfx.playTick();
    }

    // Team B (Left/Right to move cursor, Up to swap)
    if (this.wasJustPressed('ArrowLeft')) {
      this.cursorB = Math.max(0, this.cursorB - 1);
      sfx.playClick();
    }
    if (this.wasJustPressed('ArrowRight')) {
      this.cursorB = Math.min(3, this.cursorB + 1);
      sfx.playClick();
    }
    if (this.wasJustPressed('ArrowUp')) {
      this.swap(this.arrB, this.cursorB);
      sfx.playTick();
    }
    
    // Clear any unhandled presses
    this.keyPressed = {};
  },

  drawArray(ctx, arr, cursor, color, offsetX, offsetY) {
    const blockW = 60;
    const blockH = 80;
    const spacing = 15;
    
    for (let i = 0; i < arr.length; i++) {
      let x = offsetX + i * (blockW + spacing);
      let y = offsetY;
      
      // Draw background block
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(x, y, blockW, blockH, 8);
      ctx.fill();
      ctx.stroke();
      
      // Draw text
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 20px sans-serif'; // Reduced font size to fit floats and negatives
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(arr[i], x + blockW/2, y + blockH/2);
    }

    // Draw cursor highlight (Highlights block `cursor` and `cursor+1`)
    let highlightX = offsetX + cursor * (blockW + spacing) - 5;
    let highlightY = offsetY - 5;
    let highlightW = (blockW * 2) + spacing + 10;
    let highlightH = blockH + 10;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.setLineDash([8, 4]);
    ctx.beginPath();
    ctx.roundRect(highlightX, highlightY, highlightW, highlightH, 12);
    ctx.stroke();
    ctx.setLineDash([]); // Reset
    
    // Swap icon indicator
    ctx.fillStyle = color;
    ctx.font = '24px sans-serif';
    ctx.fillText('↔', highlightX + highlightW/2, highlightY + highlightH + 15);
  },

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Split line
    this.ctx.beginPath();
    this.ctx.moveTo(400, 0);
    this.ctx.lineTo(400, this.height);
    this.ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Draw Team A
    this.drawArray(this.ctx, this.arrA, this.cursorA, this.colorA, 25, 120);
    this.ctx.fillStyle = this.colorA;
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("Team A Vector", 200, 60);
    
    // Draw Team B
    this.drawArray(this.ctx, this.arrB, this.cursorB, this.colorB, 425, 120);
    this.ctx.fillStyle = this.colorB;
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("Team B Vector", 600, 60);
  },

  endGame(winner) {
    this.active = false;
    sfx.playSuccess();
    
    document.getElementById('minigame-overlay').style.display = 'flex';
    document.getElementById('btn-start-minigame').style.display = 'none';
    
    let winText = document.createElement('h2');
    winText.id = 'win-text';
    winText.style.color = winner === 'A' ? this.colorA : this.colorB;
    winText.innerText = (winner === 'A' ? teamAName : teamBName) + " Sorted First!";
    document.getElementById('minigame-overlay').appendChild(winText);

    assignFirstTurn(winner);
  }
};


class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.active = false;
    this.colors = ['#06b6d4', '#d946ef', '#38bdf8', '#c084fc', '#2dd4bf', '#e879f9'];
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start() {
    this.active = true;
    this.canvas.style.display = 'block';
    this.resize();
    this.particles = [];
    for (let i = 0; i < 150; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height - this.canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * this.canvas.height,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngleIncremental: Math.random() * 0.07 + 0.02,
        tiltAngle: 0
      });
    }
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  stop() {
    this.active = false;
    this.canvas.style.display = 'none';
  }

  animate() {
    if (!this.active) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let finished = true;
    this.particles.forEach((p, idx) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

      if (p.y < this.canvas.height) {
        finished = false;
      }

      this.ctx.beginPath();
      this.ctx.lineWidth = p.r;
      this.ctx.strokeStyle = p.color;
      this.ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      this.ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      this.ctx.stroke();
    });

    if (finished) {
      this.particles.forEach(p => {
        p.y = -20;
      });
    }

    requestAnimationFrame(() => this.animate());
  }
}

let confetti = null;

window.addEventListener('DOMContentLoaded', () => {
  confetti = new ConfettiEngine('confetti-canvas');
  minigame.init(); 
  initRoomsDatabase();
  initView();
  renderRoomsPanel();
});

function initRoomsDatabase() {
  const storedRooms = localStorage.getItem(STORAGE_KEY);
  let loadedRooms = null;
  if (storedRooms) {
    try {
      loadedRooms = JSON.parse(storedRooms);
    } catch(e) {}
  }

  const requiredKeys = ["room_c001", "room_c102", "room_c103", "room_c504", "room_c111", "room_c110", "room_c509"];
  const needsMigration = !loadedRooms || requiredKeys.some(key => !loadedRooms[key]) || Object.keys(loadedRooms).length !== requiredKeys.length;

  if (needsMigration) {
    rooms = {
      "room_c001": { name: "C001", active: false, currentScreen: "splash-screen" },
      "room_c102": { name: "C102", active: false, currentScreen: "splash-screen" },
      "room_c103": { name: "C103", active: false, currentScreen: "splash-screen" },
      "room_c504": { name: "C504", active: false, currentScreen: "splash-screen" },
      "room_c111": { name: "C111", active: false, currentScreen: "splash-screen" },
      "room_c110": { name: "C110", active: false, currentScreen: "splash-screen" },
      "room_c509": { name: "C509", active: false, currentScreen: "splash-screen" }
    };
    saveRoomsToStorage();
  } else {
    rooms = loadedRooms;
  }
}

function saveRoomsToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rooms));
}

function saveCurrentRoomState(screenId) {
  if (!activeRoomId) return;

  rooms[activeRoomId] = {
    name: rooms[activeRoomId].name,
    active: true,
    currentScreen: screenId,
    teamAName,
    teamBName,
    teamAScore,
    teamBScore,
    activeTeam,
    startingTeamEachRound,
    currentIndex,
    gameQuestions,
    isStealTurn,
    hasAnswered
  };

  saveRoomsToStorage();
}

function initView() {
  document.getElementById('btn-splash-next').addEventListener('click', () => {
    sfx.playClick();
    goToScreen('setup-screen');
  });

  document.getElementById('btn-splash-back').addEventListener('click', () => {
    sfx.playClick();
    exitActiveRoom();
  });

  document.getElementById('btn-setup-back').addEventListener('click', () => {
    sfx.playClick();
    goToScreen('splash-screen');
  });

  document.getElementById('btn-setup-next').addEventListener('click', handleSetupNext);

  document.getElementById('btn-start-game').addEventListener('click', handleStartGameClick);

  document.getElementById('btn-pause').addEventListener('click', toggleTimer);
  document.getElementById('btn-skip').addEventListener('click', skipQuestion);
  document.getElementById('btn-restart').addEventListener('click', restartQuiz);

  document.getElementById('btn-rooms').addEventListener('click', () => {
    sfx.playClick();
    exitActiveRoom();
  });

  document.getElementById('btn-password-cancel').addEventListener('click', closePasswordModal);
  document.getElementById('btn-password-confirm').addEventListener('click', verifyPassword);
  document.getElementById('input-admin-password').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      verifyPassword();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (document.getElementById('game-screen').classList.contains('active')) {
      if (e.code === 'Space') {
        e.preventDefault();
        toggleTimer();
      }
    }
  });
}

function exitActiveRoom() {
  stopTimer();
  confetti.stop();
  minigame.active = false;
  activeRoomId = null;
  renderRoomsPanel();
  showScreen('room-screen');
}

function goToScreen(screenId) {
  showScreen(screenId);
  saveCurrentRoomState(screenId);
}

function showScreen(screenId) {
  const screens = document.querySelectorAll('.game-screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }

  const controlBar = document.querySelector('.control-bar');
  if (screenId === 'room-screen' || screenId === 'splash-screen' || screenId === 'setup-screen') {
    controlBar.style.display = 'none';
  } else {
    controlBar.style.display = 'block';
  }
}

function renderRoomsPanel() {
  const container = document.getElementById('rooms-list-container');
  container.innerHTML = '';

  Object.keys(rooms).forEach(id => {
    const room = rooms[id];
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-6 col-lg-4';

    let statusClass = 'bg-secondary text-white';
    let statusText = 'Empty';
    let details = 'No active game';

    if (room.active) {
      if (room.currentScreen === 'winner-screen') {
        statusClass = 'bg-info text-dark';
        statusText = 'Completed';
        const winTeam = room.teamAScore > room.teamBScore ? room.teamAName : room.teamBScore > room.teamAScore ? room.teamBName : 'Tie';
        details = `Winner: <strong>${winTeam}</strong><br>${room.teamAScore} - ${room.teamBScore}`;
      } else {
        statusClass = 'bg-success text-dark';
        statusText = 'In Progress';
        details = `Question <strong>${room.currentIndex + 1}/60</strong><br>${room.teamAName} [${room.teamAScore}] vs ${room.teamBName} [${room.teamBScore}]`;
      }
    }

    cardCol.innerHTML = `
      <div class="room-card glass-panel text-center h-100 d-flex flex-column justify-content-between">
        <div>
          <h3 class="text-white h3 mb-2">${room.name}</h3>
          <span class="room-status-badge badge ${statusClass} mb-3">${statusText}</span>
          <p class="text-secondary small mt-2 mb-4">${details}</p>
        </div>
        <div class="d-flex flex-column gap-2">
          <button class="btn btn-premium btn-sm w-100 py-2 fs-6" onclick="enterRoom('${id}')">
            ${room.active ? '<i class="bi bi-play-fill me-1"></i>Resume' : '<i class="bi bi-plus-lg me-1"></i>Start'}
          </button>
          <div class="d-flex gap-2">
            <button class="btn btn-outline-warning btn-sm flex-fill py-1 small" onclick="promptPassword('${id}', 'reset')">
              Reset
            </button>
            <button class="btn btn-outline-danger btn-sm flex-fill py-1 small" onclick="promptPassword('${id}', 'delete')">
              Delete
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(cardCol);
  });
}

window.enterRoom = function(id) {
  sfx.playClick();
  activeRoomId = id;
  const room = rooms[id];

  if (room.active) {
    teamAName = room.teamAName;
    teamBName = room.teamBName;
    teamAScore = room.teamAScore;
    teamBScore = room.teamBScore;
    activeTeam = room.activeTeam;
    startingTeamEachRound = room.startingTeamEachRound;
    currentIndex = room.currentIndex;
    gameQuestions = room.gameQuestions;
    isStealTurn = room.isStealTurn;
    hasAnswered = room.hasAnswered;

    updateScoreboard();

    if (room.currentScreen === 'game-screen') {
      showScreen('game-screen');
      loadQuestion(currentIndex);
    } else if (room.currentScreen === 'activity-screen') {
      minigame.reset();
      showActivityScreenForNextQuestion();
    } else if (room.currentScreen === 'winner-screen') {
      endGame();
    } else {
      showScreen(room.currentScreen);
    }
  } else {
    currentIndex = 0;
    gameQuestions = [];
    showScreen('splash-screen');
    saveCurrentRoomState('splash-screen');
  }
};

window.promptPassword = function(roomId, action) {
  sfx.playClick();
  passwordContext.roomId = roomId;
  passwordContext.action = action;

  document.getElementById('input-admin-password').value = '';
  document.getElementById('password-error-msg').classList.add('d-none');
  document.getElementById('password-overlay').classList.add('active');
  document.getElementById('input-admin-password').focus();
};

function closePasswordModal() {
  sfx.playClick();
  document.getElementById('password-overlay').classList.remove('active');
}

function verifyPassword() {
  const pwd = document.getElementById('input-admin-password').value;
  const errorMsg = document.getElementById('password-error-msg');

  if (pwd === ADMIN_PASSWORD) {
    sfx.playSuccess();
    document.getElementById('password-overlay').classList.remove('active');

    const targetRoomId = passwordContext.roomId;

    if (passwordContext.action === 'reset' || passwordContext.action === 'delete') {
      rooms[targetRoomId] = {
        name: rooms[targetRoomId].name,
        active: false,
        currentScreen: "splash-screen"
      };
    }

    saveRoomsToStorage();

    if (activeRoomId === targetRoomId) {
      exitActiveRoom();
    } else {
      renderRoomsPanel();
    }
  } else {
    sfx.playFailure();
    errorMsg.classList.remove('d-none');
    document.getElementById('input-admin-password').value = '';
    document.getElementById('input-admin-password').focus();
  }
}

function handleSetupNext() {
  const tA = document.getElementById('input-team-a').value.trim();
  const tB = document.getElementById('input-team-b').value.trim();

  teamAName = tA || "Team Alpha";
  teamBName = tB || "Team Beta";

  sfx.playClick();
  minigame.reset();
  goToScreen('activity-screen');
}

function assignFirstTurn(team) {
  activeTeam = team;
  startingTeamEachRound = team;
  document.getElementById('btn-start-game').disabled = false;
  saveCurrentRoomState('activity-screen');
}

function prepareQuestions() {
  const facts = QUESTIONS.filter(q => q.type === 'fact');
  const curriculum = QUESTIONS.filter(q => q.type === 'curriculum');

  shuffleArray(facts);
  shuffleArray(curriculum);

  gameQuestions = [];
  for (let i = 0; i < 30; i++) {
    if (facts[i]) gameQuestions.push(facts[i]);
    if (curriculum[i]) gameQuestions.push(curriculum[i]);
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function handleStartGameClick() {
  if (currentIndex === 0 && gameQuestions.length === 0) {
    startGame();
  } else {
    sfx.playClick();
    goToScreen('game-screen');
    loadQuestion(currentIndex);
  }
}

function startGame() {
  sfx.playClick();

  teamAScore = 0;
  teamBScore = 0;
  currentIndex = 0;
  isStealTurn = false;
  hasAnswered = false;

  prepareQuestions();
  updateScoreboard();

  const btnStart = document.getElementById('btn-start-game');
  if (btnStart) {
    btnStart.innerHTML = `<i class="bi bi-play-circle-fill me-2"></i>Start Question 2`;
  }

  goToScreen('game-screen');
  loadQuestion(currentIndex);
}

function updateScoreboard() {
  document.getElementById('panel-team-a-name').innerText = teamAName;
  document.getElementById('panel-team-b-name').innerText = teamBName;
  document.getElementById('score-team-a').innerText = teamAScore;
  document.getElementById('score-team-b').innerText = teamBScore;

  const panelA = document.getElementById('panel-team-a');
  const panelB = document.getElementById('panel-team-b');

  if (activeTeam === 'A') {
    panelA.classList.add('active');
    panelB.classList.remove('active');
  } else {
    panelB.classList.add('active');
    panelA.classList.remove('active');
  }

  const activeName = (activeTeam === 'A') ? teamAName : teamBName;
  document.getElementById('game-active-team-name').innerText = activeName;

  const activeIndicator = document.getElementById('game-active-indicator');
  if (activeIndicator) {
    activeIndicator.className = 'turn-indicator team-' + (activeTeam === 'A' ? 'a' : 'b');
  }
}

function loadQuestion(index) {
  stopTimer();
  isStealTurn = false;
  hasAnswered = false;

  if (index >= gameQuestions.length) {
    endGame();
    return;
  }

  const q = gameQuestions[index];

  document.getElementById('game-round-info').innerText = `Question ${index + 1} of ${gameQuestions.length}`;

  const badge = document.getElementById('game-category-badge');
  badge.innerText = q.category;
  if (q.type === 'fact') {
    badge.className = 'badge-category badge-fact';
  } else {
    badge.className = 'badge-category badge-curriculum';
  }

  document.getElementById('game-question-text').innerText = q.question;

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  const prefixes = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.index = idx;
    btn.innerHTML = `<span class="option-prefix">${prefixes[idx]}</span> <span class="option-text">${opt}</span>`;
    btn.addEventListener('click', () => handleAnswer(idx));
    optionsContainer.appendChild(btn);
  });

  activeTeam = startingTeamEachRound;
  updateScoreboard();

  timerValue = primaryTimeLimit;
  updateTimerUI();
  isTimerPaused = false;
  startTimerLoop();

  saveCurrentRoomState('game-screen');
}

function startTimerLoop() {
  stopTimer();
  const timerCircle = document.getElementById('timer-progress');
  timerCircle.style.strokeDashoffset = 0;

  timerInterval = setInterval(() => {
    if (isTimerPaused) return;

    timerValue--;
    updateTimerUI();

    if (timerValue <= 5 && timerValue > 0) {
      sfx.playHurry();
    } else if (timerValue > 0) {
      sfx.playTick();
    }

    if (timerValue <= 0) {
      stopTimer();
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerUI() {
  document.getElementById('timer-digit').innerText = timerValue;

  const timerCircle = document.getElementById('timer-progress');
  const timerContainer = document.getElementById('timer-ring');

  const maxTime = isStealTurn ? stealTimeLimit : primaryTimeLimit;
  const dashoffset = 339 - (339 * timerValue) / maxTime;
  timerCircle.style.strokeDashoffset = dashoffset;

  timerContainer.classList.remove('timer-warning', 'timer-danger');
  if (timerValue <= 5) {
    timerContainer.classList.add('timer-danger');
  } else if (timerValue <= 10) {
    timerContainer.classList.add('timer-warning');
  }
}

function toggleTimer() {
  if (hasAnswered) return;
  isTimerPaused = !isTimerPaused;
  const btn = document.getElementById('btn-pause');
  if (isTimerPaused) {
    btn.innerHTML = '<i class="bi bi-play-fill"></i> Resume Timer';
    btn.classList.add('btn-warning');
  } else {
    btn.innerHTML = '<i class="bi bi-pause-fill"></i> Pause Timer';
    btn.classList.remove('btn-warning');
  }
  sfx.playClick();
  saveCurrentRoomState('game-screen');
}

function handleAnswer(selectedIdx) {
  if (hasAnswered) return;
  stopTimer();

  const q = gameQuestions[currentIndex];
  const isCorrect = (selectedIdx === q.answer);
  const options = document.querySelectorAll('.option-btn');

  if (isCorrect) {
    hasAnswered = true;
    sfx.playSuccess();
    options[selectedIdx].classList.add('correct');
    options.forEach(btn => btn.disabled = true);

    if (activeTeam === 'A') {
      teamAScore++;
    } else {
      teamBScore++;
    }
    updateScoreboard();

    const activeName = (activeTeam === 'A') ? teamAName : teamBName;
    showNotification('correct', 'CORRECT!', `+1 Point to ${activeName}`, 2500, () => {
      goToNextQuestionFlow();
    });

  } else {
    sfx.playFailure();
    options[selectedIdx].classList.add('wrong');
    options[selectedIdx].disabled = true;

    if (!isStealTurn) {
      isStealTurn = true;
      activeTeam = (activeTeam === 'A') ? 'B' : 'A';
      updateScoreboard();

      const newActiveName = (activeTeam === 'A') ? teamAName : teamBName;
      showNotification('steal', 'STEAL OPPORTUNITY!', `${newActiveName}, your turn to steal!`, 3000, () => {
        timerValue = stealTimeLimit;
        updateTimerUI();
        startTimerLoop();
        saveCurrentRoomState('game-screen');
      });
    } else {
      hasAnswered = true;
      options[q.answer].classList.add('correct');
      options.forEach(btn => btn.disabled = true);

      showNotification('wrong', 'INCORRECT!', `No points. Correct: ${q.options[q.answer]}`, 3000, () => {
        goToNextQuestionFlow();
      });
    }
  }
  saveCurrentRoomState('game-screen');
}

function handleTimeout() {
  const q = gameQuestions[currentIndex];
  const options = document.querySelectorAll('.option-btn');
  sfx.playFailure();

  if (!isStealTurn) {
    isStealTurn = true;
    activeTeam = (activeTeam === 'A') ? 'B' : 'A';
    updateScoreboard();

    const newActiveName = (activeTeam === 'A') ? teamAName : teamBName;
    showNotification('steal', "TIME'S UP!", `${newActiveName}, chance to steal!`, 3000, () => {
      timerValue = stealTimeLimit;
      updateTimerUI();
      startTimerLoop();
      saveCurrentRoomState('game-screen');
    });
  } else {
    hasAnswered = true;
    options[q.answer].classList.add('correct');
    options.forEach(btn => btn.disabled = true);

    showNotification('wrong', "TIME'S UP!", `No points. Correct: ${q.options[q.answer]}`, 3000, () => {
      goToNextQuestionFlow();
    });
  }
  saveCurrentRoomState('game-screen');
}

function goToNextQuestionFlow() {
  currentIndex++;
  if (currentIndex >= gameQuestions.length) {
    endGame();
  } else {
    showActivityScreenForNextQuestion();
  }
}

function showActivityScreenForNextQuestion() {
  const titleElem = document.getElementById('activity-title');
  if (titleElem) {
    titleElem.innerText = `First Turn Challenge for Question ${currentIndex + 1}`;
  }

  minigame.reset();

  const btnStart = document.getElementById('btn-start-game');
  if (btnStart) {
    btnStart.innerHTML = `<i class="bi bi-play-circle-fill me-2"></i>Start Question ${currentIndex + 1}`;
    btnStart.disabled = true;
  }

  goToScreen('activity-screen');
}

function showNotification(type, title, subtitle, duration, callback) {
  const overlay = document.getElementById('game-overlay');
  overlay.className = `game-overlay active overlay-${type}`;
  document.getElementById('overlay-title').innerText = title;
  document.getElementById('overlay-subtitle').innerText = subtitle;

  if (type === 'steal') {
    sfx.playSteal();
  }

  setTimeout(() => {
    overlay.classList.remove('active');
    if (callback) callback();
  }, duration);
}

function skipQuestion() {
  sfx.playClick();
  stopTimer();

  const q = gameQuestions[currentIndex];
  const options = document.querySelectorAll('.option-btn');
  options[q.answer].classList.add('correct');
  options.forEach(btn => btn.disabled = true);

  showNotification('wrong', 'SKIPPED', `Correct answer: ${q.options[q.answer]}`, 2500, () => {
    goToNextQuestionFlow();
  });
}

function endGame() {
  stopTimer();
  sfx.playWin();

  let winnerTitle = "IT'S A TIE!";
  let winnerSubtitle = `Both teams scored ${teamAScore} points!`;

  if (teamAScore > teamBScore) {
    winnerTitle = `${teamAName} WINS!`;
    winnerSubtitle = `Score: ${teamAScore} - ${teamBScore}`;
  } else if (teamBScore > teamAScore) {
    winnerTitle = `${teamBName} WINS!`;
    winnerSubtitle = `Score: ${teamBScore} - ${teamAScore}`;
  }

  document.getElementById('winner-title').innerText = winnerTitle;
  document.getElementById('winner-subtitle').innerText = winnerSubtitle;

  document.getElementById('result-team-a-name').innerText = teamAName;
  document.getElementById('result-team-a-score').innerText = teamAScore;
  document.getElementById('result-team-b-name').innerText = teamBName;
  document.getElementById('result-team-b-score').innerText = teamBScore;

  goToScreen('winner-screen');
  confetti.start();
}

function restartQuiz() {
  sfx.playClick();
  confetti.stop();
  gameQuestions = [];
  currentIndex = 0;

  const titleElem = document.getElementById('activity-title');
  if (titleElem) {
    titleElem.innerText = "First Turn Challenge!";
  }
  const btnStart = document.getElementById('btn-start-game');
  if (btnStart) {
    btnStart.innerHTML = '<i class="bi bi-rocket-takeoff-fill me-2"></i>Start Quiz';
    btnStart.disabled = true;
  }

  goToScreen('setup-screen');
}
