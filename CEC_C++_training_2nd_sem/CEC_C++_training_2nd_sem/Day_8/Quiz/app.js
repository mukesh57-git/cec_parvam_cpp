/**
 * Day 8 Quiz App - Game Engine with Rooms and Persistence
 * Topic: File Handling & Exception Handling
 * Includes: Split-Screen "Traffic Dodge Race" Minigame
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

const STORAGE_KEY = 'parvam_quiz_rooms_day8';
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

// MINI-GAME ENGINE: "Traffic Dodge Race"
let minigame = {
  canvas: null,
  ctx: null,
  reqId: null,
  active: false,
  width: 800,
  height: 420,
  
  keyState: {},
  
  colorA: '#06b6d4', // Cyan (Team A)
  colorB: '#d946ef', // Magenta (Team B)
  
  // Game state variables
  carXA: 185, // X position of Team A car center (range: 100 to 270)
  carXB: 585, // X position of Team B car center (range: 500 to 670)
  playerY: 340, // Fixed Y position of player cars
  carW: 30,
  carH: 50,
  
  // Traffic cars list
  trafficA: [], // Array of { x, y, color }
  trafficB: [],
  
  // Scoring / Survival
  crashedA: false,
  crashedB: false,
  gameOver: false,
  winner: null,
  
  // Explosion effect variables
  explosionActive: false,
  explosionX: 0,
  explosionY: 0,
  explosionRadius: 0,
  
  // Speed and timers
  trafficSpeed: 3.0,
  spawnTimerA: 0,
  spawnTimerB: 0,
  scrollOffset: 0,
  speedIncreaseInterval: 0,
  startTime: 0,
  lastSpeedStep: 0,
  speedUpNotificationActive: false,
  speedUpNotificationTimer: 0,
  laneA: 1,
  laneB: 1,

  init() {
    this.canvas = document.getElementById('minigame-canvas');
    this.ctx = this.canvas.getContext('2d');
    
    window.addEventListener('keydown', e => {
      const wasPressed = this.keyState[e.code];
      this.keyState[e.code] = true;
      
      // Lane-based discrete switches on fresh keydown (strictly one lane change per tap)
      if (this.active && !this.gameOver && !wasPressed) {
        if (e.code === 'KeyA') {
          if (this.laneA > 0) {
            this.laneA--;
            sfx.playClick();
          }
        }
        if (e.code === 'KeyD') {
          if (this.laneA < 2) {
            this.laneA++;
            sfx.playClick();
          }
        }
        if (e.code === 'ArrowLeft') {
          if (this.laneB > 0) {
            this.laneB--;
            sfx.playClick();
          }
        }
        if (e.code === 'ArrowRight') {
          if (this.laneB < 2) {
            this.laneB++;
            sfx.playClick();
          }
        }
      }
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

  reset() {
    // Reset lanes and positions
    this.laneA = 1;
    this.laneB = 1;
    this.carXA = 185;
    this.carXB = 585;
    
    // Clear traffic
    this.trafficA = [];
    this.trafficB = [];
    
    // Reset states
    this.crashedA = false;
    this.crashedB = false;
    this.gameOver = false;
    this.winner = null;
    
    this.explosionActive = false;
    this.explosionRadius = 0;
    
    this.trafficSpeed = 3.0;
    this.startTime = Date.now();
    this.lastSpeedStep = 0;
    this.speedUpNotificationActive = false;
    this.speedUpNotificationTimer = 0;
    
    this.spawnTimerA = 0;
    this.spawnTimerB = 0;
    this.scrollOffset = 0;
    this.speedIncreaseInterval = 0;
    
    this.active = false;
    
    const existingWinText = document.getElementById('win-text');
    if(existingWinText) existingWinText.remove();
    
    document.getElementById('btn-start-game').disabled = true;
    document.getElementById('minigame-overlay').style.display = 'flex';
    document.getElementById('btn-start-minigame').style.display = 'block';
    document.getElementById('btn-start-minigame').innerText = "Start Dodge Challenge";
    
    if(this.reqId) cancelAnimationFrame(this.reqId);
    this.draw(); 
  },

  start() {
    this.active = true;
    this.keyState = {};
    this.startTime = Date.now();
    this.reqId = requestAnimationFrame(() => this.loop());
  },

  loop() {
    if (!this.active) return;

    this.update();
    this.draw();

    if (this.gameOver) {
      // Delay ending the minigame slightly to let the crash explosion display
      setTimeout(() => {
        if(this.reqId) {
          cancelAnimationFrame(this.reqId);
          this.reqId = null;
        }
        this.endGame(this.winner);
      }, 1500);
      
      // Stop animating standard loops, keep drawing explosion frame
      this.active = false;
      this.drawExplosionFrame();
      return;
    }

    this.reqId = requestAnimationFrame(() => this.loop());
  },

  update() {
    // Lane target coordinates (matching the spawned traffic lane centers)
    const targetXA = 110 + this.laneA * 75;
    const targetXB = 510 + this.laneB * 75;
    
    // Smoothly slide to the target active lane
    this.carXA += (targetXA - this.carXA) * 0.3;
    this.carXB += (targetXB - this.carXB) * 0.3;

    // Scroll road lane markings
    this.scrollOffset = (this.scrollOffset + this.trafficSpeed + 1) % 60;

    // Every 10 seconds, increase speed slightly
    const elapsedSeconds = (Date.now() - this.startTime) / 1000;
    const currentStep = Math.floor(elapsedSeconds / 10);
    if (currentStep > this.lastSpeedStep) {
      this.lastSpeedStep = currentStep;
      this.trafficSpeed = 3.0 + currentStep * 0.6;
      this.speedUpNotificationActive = true;
      this.speedUpNotificationTimer = 90; // Show for 1.5 seconds (90 frames)
      sfx.playSteal(); // Play alert sound
    }

    if (this.speedUpNotificationActive) {
      this.speedUpNotificationTimer--;
      if (this.speedUpNotificationTimer <= 0) {
        this.speedUpNotificationActive = false;
      }
    }

    // Update active traffic on side A
    this.trafficA.forEach(car => {
      car.y += this.trafficSpeed;
    });
    // Remove traffic off-screen
    this.trafficA = this.trafficA.filter(car => car.y < 450);

    // Update active traffic on side B
    this.trafficB.forEach(car => {
      car.y += this.trafficSpeed;
    });
    this.trafficB = this.trafficB.filter(car => car.y < 450);

    // Spawn new traffic A
    this.spawnTimerA++;
    if (this.spawnTimerA > 70) {
      this.spawnTimerA = 0;
      this.spawnTrafficCar('A');
    }

    // Spawn new traffic B
    this.spawnTimerB++;
    if (this.spawnTimerB > 70) {
      this.spawnTimerB = 0;
      this.spawnTrafficCar('B');
    }

    // Check collisions
    this.checkCollisions();
  },

  spawnTrafficCar(side) {
    const lanes = [0, 1, 2];
    // Randomly pick one or two lanes to block
    // We must always leave at least one lane open to dodge!
    const numCars = Math.random() < 0.35 ? 2 : 1; // 35% chance to spawn 2 cars
    
    // Shuffle lanes to pick random indices
    for (let i = lanes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lanes[i], lanes[j]] = [lanes[j], lanes[i]];
    }

    const colors = ['#f43f5e', '#ef4444', '#f97316', '#eab308', '#3b82f6']; // colorful traffic

    for (let i = 0; i < numCars; i++) {
      const lane = lanes[i];
      let xPos = 0;
      if (side === 'A') {
        xPos = 110 + lane * 75;
      } else {
        xPos = 510 + lane * 75;
      }
      
      const randColor = colors[Math.floor(Math.random() * colors.length)];
      const car = {
        x: xPos,
        y: -60,
        color: randColor
      };
      
      if (side === 'A') {
        this.trafficA.push(car);
      } else {
        this.trafficB.push(car);
      }
    }
  },

  checkCollisions() {
    // Player A bounding box
    const rectPlayerA = { x: this.carXA, y: this.playerY, w: this.carW, h: this.carH };
    
    // Check Team A traffic
    for (let i = 0; i < this.trafficA.length; i++) {
      const obstacle = this.trafficA[i];
      const rectObstacle = { x: obstacle.x, y: obstacle.y, w: this.carW, h: this.carH };
      if (this.isOverlapping(rectPlayerA, rectObstacle)) {
        this.crashedA = true;
        this.gameOver = true;
        this.winner = 'B'; // A crashed first, so B wins!
        this.triggerExplosion(this.carXA + this.carW/2, this.playerY + this.carH/2);
        return;
      }
    }

    // Player B bounding box
    const rectPlayerB = { x: this.carXB, y: this.playerY, w: this.carW, h: this.carH };

    // Check Team B traffic
    for (let i = 0; i < this.trafficB.length; i++) {
      const obstacle = this.trafficB[i];
      const rectObstacle = { x: obstacle.x, y: obstacle.y, w: this.carW, h: this.carH };
      if (this.isOverlapping(rectPlayerB, rectObstacle)) {
        this.crashedB = true;
        this.gameOver = true;
        this.winner = 'A'; // B crashed first, so A wins!
        this.triggerExplosion(this.carXB + this.carW/2, this.playerY + this.carH/2);
        return;
      }
    }
  },

  isOverlapping(r1, r2) {
    const tolerance = 2;
    return (
      r1.x + tolerance < r2.x + r2.w - tolerance &&
      r1.x + r1.w - tolerance > r2.x + tolerance &&
      r1.y + tolerance < r2.y + r2.h - tolerance &&
      r1.y + r1.h - tolerance > r2.y + tolerance
    );
  },

  triggerExplosion(x, y) {
    this.explosionActive = true;
    this.explosionX = x;
    this.explosionY = y;
    this.explosionRadius = 10;
    sfx.playFailure();
  },

  drawExplosionFrame() {
    let frame = 0;
    const animateExplosion = () => {
      if (frame > 20) return;
      this.draw(); // Redraw static highway state
      
      // Draw growing, fading fire circle
      const r = this.explosionRadius + frame * 3;
      const alpha = 1 - (frame / 20);
      
      this.ctx.save();
      this.ctx.fillStyle = `rgba(255, 99, 71, ${alpha})`;
      this.ctx.beginPath();
      this.ctx.arc(this.explosionX, this.explosionY, r, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Center yellow core
      this.ctx.fillStyle = `rgba(255, 223, 0, ${alpha})`;
      this.ctx.beginPath();
      this.ctx.arc(this.explosionX, this.explosionY, r * 0.5, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
      
      frame++;
      requestAnimationFrame(animateExplosion);
    };
    animateExplosion();
  },

  drawF1Car(ctx, x, y, bodyColor) {
    // Draw Wheels (Black Rectangles at corners)
    ctx.fillStyle = '#111';
    // Front wheels
    ctx.fillRect(x - 3, y + 6, 6, 11);
    ctx.fillRect(x + 27, y + 6, 6, 11);
    // Rear wheels
    ctx.fillRect(x - 5, y + 32, 8, 13);
    ctx.fillRect(x + 27, y + 32, 8, 13);

    // Front wing nose structure
    ctx.fillStyle = '#444';
    ctx.fillRect(x - 2, y + 3, 34, 4);

    // Main body pod
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.roundRect(x + 6, y + 6, 18, 36, [6, 6, 2, 2]);
    ctx.fill();

    // Nose Cone
    ctx.beginPath();
    ctx.moveTo(x + 15, y);
    ctx.lineTo(x + 10, y + 10);
    ctx.lineTo(x + 20, y + 10);
    ctx.closePath();
    ctx.fill();

    // Side pods
    ctx.fillStyle = '#333';
    ctx.fillRect(x + 3, y + 18, 4, 15);
    ctx.fillRect(x + 23, y + 18, 4, 15);

    // Cockpit opening and driver helmet
    ctx.fillStyle = '#000';
    ctx.fillRect(x + 10, y + 18, 10, 12);
    ctx.fillStyle = '#ffff00'; // driver helmet
    ctx.beginPath();
    ctx.arc(x + 15, y + 23, 4, 0, Math.PI*2);
    ctx.fill();

    // Rear wing brackets and spoiler wing
    ctx.fillStyle = '#222';
    ctx.fillRect(x - 4, y + 42, 38, 5); // Rear Spoiler Wing
    ctx.fillStyle = bodyColor;
    ctx.fillRect(x + 2, y + 42, 26, 2); // Color spoiler strip
  },

  drawRoad(side) {
    const startX = side === 'A' ? 0 : 400;
    const roadX = side === 'A' ? 100 : 500;
    const laneW = 66.6;

    // 1. Draw Grass Shoulders
    this.ctx.fillStyle = '#1e3f20'; // dark green grass
    this.ctx.fillRect(startX, 0, 100, 420); // Left shoulder
    this.ctx.fillRect(roadX + 200, 0, 100, 420); // Right shoulder

    // 2. Draw Main Road Asphalt
    this.ctx.fillStyle = '#282b30'; // dark grey road
    this.ctx.fillRect(roadX, 0, 200, 420);

    // 3. Draw Solid Yellow Outer Edges
    this.ctx.strokeStyle = '#eab308'; // Amber/Yellow
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(roadX, 0);
    this.ctx.lineTo(roadX, 420);
    this.ctx.moveTo(roadX + 200, 0);
    this.ctx.lineTo(roadX + 200, 420);
    this.ctx.stroke();

    // 4. Draw Dashed White Lane Markings (Divide 3 lanes)
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([20, 20]);
    this.ctx.lineDashOffset = -this.scrollOffset;
    this.ctx.beginPath();
    // First divider line
    this.ctx.moveTo(roadX + laneW, 0);
    this.ctx.lineTo(roadX + laneW, 420);
    // Second divider line
    this.ctx.moveTo(roadX + laneW * 2, 0);
    this.ctx.lineTo(roadX + laneW * 2, 420);
    this.ctx.stroke();
    this.ctx.setLineDash([]); // Reset
  },

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // DRAW ROADS
    this.drawRoad('A');
    this.drawRoad('B');

    // Split Line Divider
    this.ctx.strokeStyle = '#f8fafc';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(400, 0);
    this.ctx.lineTo(400, 420);
    this.ctx.stroke();

    // DRAW TEAM A TRAFFIC AND PLAYER CAR
    this.trafficA.forEach(obstacle => {
      this.drawF1Car(this.ctx, obstacle.x, obstacle.y, obstacle.color);
    });
    if (!this.crashedA) {
      this.drawF1Car(this.ctx, this.carXA, this.playerY, this.colorA);
    }

    // DRAW TEAM B TRAFFIC AND PLAYER CAR
    this.trafficB.forEach(obstacle => {
      this.drawF1Car(this.ctx, obstacle.x, obstacle.y, obstacle.color);
    });
    if (!this.crashedB) {
      this.drawF1Car(this.ctx, this.carXB, this.playerY, this.colorB);
    }

    // DRAW SIDE TEXT OVERLAYS
    // Team A Status
    this.ctx.fillStyle = '#fff';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = this.colorA;
    this.ctx.fillText("Team A Racer", 200, 30);
    this.ctx.fillStyle = this.crashedA ? '#ef4444' : '#10b981';
    this.ctx.fillText(this.crashedA ? "CRASHED!" : "DRIVING...", 200, 50);

    // Team B Status
    this.ctx.fillStyle = this.colorB;
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("Team B Racer", 600, 30);
    this.ctx.fillStyle = this.crashedB ? '#ef4444' : '#10b981';
    this.ctx.fillText(this.crashedB ? "CRASHED!" : "DRIVING...", 600, 50);

    // DRAW HUD & ALERT OVERLAYS
    // Top-Center HUD
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.roundRect(320, 15, 160, 40, 20);
    this.ctx.fill();
    this.ctx.stroke();
    
    // Draw Level Text
    this.ctx.fillStyle = '#fff';
    this.ctx.font = 'bold 12px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`SPEED LEVEL: ${this.lastSpeedStep + 1}`, 400, 32);
    
    // Draw a tiny countdown bar for the 10-second mark
    const elapsedSeconds = this.active ? (Date.now() - this.startTime) / 1000 : 0;
    const progress = (elapsedSeconds % 10) / 10;
    this.ctx.fillStyle = '#eab308'; // Amber progress bar
    this.ctx.fillRect(340, 42, 120 * progress, 3);
    this.ctx.restore();

    // Draw Speed Up Banner
    if (this.speedUpNotificationActive) {
      this.ctx.save();
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      this.ctx.strokeStyle = '#eab308'; // Amber border
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.roundRect(250, 180, 300, 60, 12);
      this.ctx.fill();
      this.ctx.stroke();
      
      this.ctx.fillStyle = '#fcd34d'; // bright yellow
      this.ctx.font = 'bold 22px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(`SPEED UP! (Level ${this.lastSpeedStep + 1})`, 400, 210);
      this.ctx.restore();
    }
  },

  endGame(winner) {
    this.active = false;
    sfx.playWin();
    
    document.getElementById('minigame-overlay').style.display = 'flex';
    document.getElementById('btn-start-minigame').style.display = 'none';
    
    let winText = document.createElement('h2');
    winText.id = 'win-text';
    winText.style.color = winner === 'A' ? this.colorA : this.colorB;
    winText.innerText = (winner === 'A' ? teamAName : teamBName) + " Wins First Turn!";
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
        details = `Question <strong>${room.currentIndex + 1}/100</strong><br>${room.teamAName} [${room.teamAScore}] vs ${room.teamBName} [${room.teamBScore}]`;
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
  for (let i = 0; i < 50; i++) {
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

    // No steal turns - who crashes first gets no chance, opponent gets the only chance
    hasAnswered = true;
    options[q.answer].classList.add('correct');
    options.forEach(btn => btn.disabled = true);

    showNotification('wrong', 'INCORRECT!', `No points. Correct: ${q.options[q.answer]}`, 3000, () => {
      goToNextQuestionFlow();
    });
  }
  saveCurrentRoomState('game-screen');
}

function handleTimeout() {
  const q = gameQuestions[currentIndex];
  const options = document.querySelectorAll('.option-btn');
  sfx.playFailure();

  // No steal turns - who crashes first gets no chance, opponent gets the only chance
  hasAnswered = true;
  options[q.answer].classList.add('correct');
  options.forEach(btn => btn.disabled = true);

  showNotification('wrong', "TIME'S UP!", `No points. Correct: ${q.options[q.answer]}`, 3000, () => {
    goToNextQuestionFlow();
  });
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
