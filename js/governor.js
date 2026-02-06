document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="scenario"]');
    const containers = {
        approve: document.getElementById('scenario-approve'),
        escalate: document.getElementById('scenario-escalate'),
        block: document.getElementById('scenario-block')
    };

    function showScenario(value) {
        Object.values(containers).forEach(c => {
            c.classList.remove('active');
            c.style.opacity = '0';
        });
        if (containers[value]) {
            containers[value].classList.add('active');
            setTimeout(() => { containers[value].style.opacity = '1'; }, 50);
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', () => showScenario(radio.value));
    });

    // Show default
    showScenario('approve');
});