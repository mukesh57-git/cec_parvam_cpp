const p1Btn = document.getElementById('btn-1');
const p2Btn = document.getElementById('btn-2');
const p1Timer = document.getElementById('timer-1');
const p2Timer = document.getElementById('timer-2');
const p1Panel = document.getElementById('panel-1');
const p2Panel = document.getElementById('panel-2');

const overlay = document.getElementById('winner-overlay');
const winnerText = document.getElementById('winner-text');
const winnerSubtext = document.getElementById('winner-subtext');
const rematchBtn = document.getElementById('rematch-btn');

let state = {
    p1: { active: false, time: 0, interval: null, stopped: false },
    p2: { active: false, time: 0, interval: null, stopped: false }
};

const TARGET_TIME = 10.00;

function formatTime(ms) {
    return (ms / 1000).toFixed(2);
}

function updateDisplay(player) {
    const timeStr = formatTime(state[player].time);
    if (player === 'p1') p1Timer.textContent = timeStr;
    else p2Timer.textContent = timeStr;
}

function handleAction(player) {
    const pState = state[player];
    
    // If already stopped, do nothing
    if (pState.stopped) return;

    if (!pState.active) {
        // Start
        pState.active = true;
        pState.startTime = Date.now();
        
        const btn = player === 'p1' ? p1Btn : p2Btn;
        btn.textContent = 'Stop';
        
        const panel = player === 'p1' ? p1Panel : p2Panel;
        panel.classList.add('active');

        pState.interval = setInterval(() => {
            pState.time = Date.now() - pState.startTime;
            updateDisplay(player);
        }, 10); // 10ms resolution
    } else {
        // Stop
        pState.active = false;
        pState.stopped = true;
        clearInterval(pState.interval);
        
        // Final precision update
        pState.time = Date.now() - pState.startTime;
        updateDisplay(player);
        
        const btn = player === 'p1' ? p1Btn : p2Btn;
        btn.textContent = 'Done';
        btn.disabled = true;
        
        const panel = player === 'p1' ? p1Panel : p2Panel;
        panel.classList.remove('active');

        checkGameEnd();
    }
}

function checkGameEnd() {
    if (state.p1.stopped && state.p2.stopped) {
        setTimeout(declareWinner, 500);
    }
}

function declareWinner() {
    const p1Diff = Math.abs(TARGET_TIME - (state.p1.time / 1000));
    const p2Diff = Math.abs(TARGET_TIME - (state.p2.time / 1000));
    
    let winner, diff;
    if (p1Diff < p2Diff) {
        winner = 'Player 1';
        diff = p1Diff;
        winnerText.style.color = 'var(--p1-color)';
    } else if (p2Diff < p1Diff) {
        winner = 'Player 2';
        diff = p2Diff;
        winnerText.style.color = 'var(--p2-color)';
    } else {
        winner = 'Tie';
        diff = p1Diff;
        winnerText.style.color = 'var(--text-main)';
    }

    if (winner === 'Tie') {
        winnerText.textContent = "It's a Tie!";
        winnerSubtext.textContent = `Both players were exactly ${diff.toFixed(2)}s away!`;
    } else {
        winnerText.textContent = `${winner} Wins!`;
        winnerSubtext.textContent = `${winner} was just ${diff.toFixed(2)}s away from exactly 10.00s.\nThey get the chance to answer the question!`;
    }

    overlay.classList.add('show');
}

function resetGame() {
    overlay.classList.remove('show');
    
    state = {
        p1: { active: false, time: 0, interval: null, stopped: false },
        p2: { active: false, time: 0, interval: null, stopped: false }
    };
    
    p1Timer.textContent = '0.00';
    p2Timer.textContent = '0.00';
    
    p1Btn.textContent = 'Start';
    p2Btn.textContent = 'Start';
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}

// Event Listeners
p1Btn.addEventListener('click', () => handleAction('p1'));
p2Btn.addEventListener('click', () => handleAction('p2'));
rematchBtn.addEventListener('click', resetGame);

document.addEventListener('keydown', (e) => {
    if (overlay.classList.contains('show')) {
        if (e.key === 'Enter' || e.key === ' ') resetGame();
        return;
    }

    if (e.key.toLowerCase() === 'a') {
        handleAction('p1');
    }
    if (e.key.toLowerCase() === 'l') {
        handleAction('p2');
    }
});
