/* ============================================================
   Green Wellbeing Score Calculator
   ------------------------------------------------------------
   Shared calculator for Group H
   Student: Valentin Gabriel Luchian
   ------------------------------------------------------------
   This script uses DOM manipulation to:
     - Read four input values from the form
     - Validate each input and show error messages
     - Calculate a wellbeing score (0-100)
     - Write the result to the page dynamically (no reload)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('wellbeingForm');

    // Only run if the form exists on this page
    if (!form) return;

    const resultBox   = document.getElementById('resultBox');
    const resultScore = document.getElementById('resultScore');
    const resultLabel = document.getElementById('resultLabel');
    const resultMsg   = document.getElementById('resultMessage');
    const resultTips  = document.getElementById('resultTips');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        calculateScore();
    });

    form.addEventListener('reset', function () {
        clearErrors();
        resultBox.classList.remove('show', 'good', 'okay', 'poor');
        resultScore.textContent = '0';
        resultLabel.textContent = '';
        resultMsg.textContent = '';
        resultTips.innerHTML = '';
    });

    function clearErrors() {
        const errors = document.querySelectorAll('.calc-error');
        errors.forEach(err => err.textContent = '');
    }

    function showError(id, message) {
        const el = document.getElementById(id);
        el.textContent = message;
    }

    function validateField(value, fieldName, errorId, min, max) {
        if (value === '' || value === null || isNaN(value)) {
            showError(errorId, 'Please enter a valid number.');
            return null;
        }
        if (value < min) {
            showError(errorId, 'Value cannot be below ' + min + '.');
            return null;
        }
        if (value > max) {
            showError(errorId, 'Value cannot be above ' + max + '.');
            return null;
        }
        return value;
    }

    function calculateScore() {
        clearErrors();

        let valid = true;

        // Read input values via DOM
        const weeklyHours = parseFloat(document.getElementById('weeklyHours').value);
        const walkTime    = parseFloat(document.getElementById('walkTime').value);
        const visits      = parseFloat(document.getElementById('visits').value);
        const outdoorDays = parseFloat(document.getElementById('outdoorActivity').value);

        // Validate each input
        const h = validateField(weeklyHours, 'weeklyHours', 'errorWeeklyHours', 0, 168);
        if (h === null) valid = false;

        const w = validateField(walkTime, 'walkTime', 'errorWalkTime', 0, 120);
        if (w === null) valid = false;

        const v = validateField(visits, 'visits', 'errorVisits', 0, 100);
        if (v === null) valid = false;

        const d = validateField(outdoorDays, 'outdoorActivity', 'errorOutdoorActivity', 0, 7);
        if (d === null) valid = false;

        if (!valid) {
            resultBox.classList.remove('show');
            return;
        }

        /* ===== Scoring Logic =====
           Each component is weighted and scaled to a 0-100 sub-score.
           weeklyHours  -> 40%  (WHO recommends 2+ hrs/week)
           walkTime     -> 25%  (SDG 11: ideally <= 5 min walk)
           visits       -> 20%  (more frequent visits = better)
           outdoorDays  -> 15%  (each active day helps)
        */

        // 1. Weekly hours score (0-100)
        // 0 hours = 0, 2 hours = 50, 5+ hours = 100
        let hoursScore;
        if (h >= 5) {
            hoursScore = 100;
        } else {
            hoursScore = (h / 5) * 100;
        }

        // 2. Walk time score (0-100)
        // 0 min = 100, 5 min = 85, 10 min = 70, 20 min = 40, 30+ min = 0
        let walkScore;
        if (w <= 5) {
            walkScore = 100;
        } else if (w <= 10) {
            walkScore = 85;
        } else if (w <= 20) {
            walkScore = 60;
        } else if (w <= 30) {
            walkScore = 35;
        } else {
            walkScore = Math.max(0, 35 - (w - 30));
        }

        // 3. Visits per month score (0-100)
        // 0 = 0, 4/month = 40, 8/month = 80, 12+/month = 100
        let visitsScore;
        if (v >= 12) {
            visitsScore = 100;
        } else {
            visitsScore = Math.min(100, (v / 12) * 100);
        }

        // 4. Outdoor activity days score (0-100)
        // 0 days = 0, 3 days = 60, 5+ days = 100
        let outdoorScore;
        if (d >= 5) {
            outdoorScore = 100;
        } else {
            outdoorScore = (d / 5) * 100;
        }

        // Weighted total
        let totalScore = Math.round(
            hoursScore  * 0.40 +
            walkScore   * 0.25 +
            visitsScore * 0.20 +
            outdoorScore * 0.15
        );

        // Determine rating category
        let category, label, message, tips;

        if (totalScore >= 70) {
            category = 'good';
            label = 'Great Score!';
            message = "You're clearly making good use of green spaces and it's paying off. Keep doing what you're doing.";
            tips = [
                "Keep up your routine of getting out into nature regularly.",
                "Try visiting a green space you haven't been to before.",
                "Think about volunteering at a community garden near you.",
                "Bring a friend or family member along next time you go."
            ];
        } else if (totalScore >= 40) {
            category = 'okay';
            label = 'Not Bad, But Could Be Better';
            message = "You're getting some benefit from green spaces, but there's definitely room to do more.";
            tips = [
                "Try to get at least 2 hours a week in nature.",
                "Find the nearest park you can walk to and make it a regular thing.",
                "Take a short walk outside on your lunch break instead of sitting at your desk.",
                "Look up a local parkrun or walking group for a bit of motivation."
            ];
        } else {
            category = 'poor';
            label = 'Time to Get Outside';
            message = "You're not getting much green space time at the moment, and it's probably affecting how you feel. The good news is that even small changes make a real difference.";
            tips = [
                "Start with just 20 minutes outside each day, even if it's just a walk around the block.",
                "Find your nearest park on a map and go check it out this week.",
                "Swap one thing you do indoors for the same thing outdoors.",
                "Take your next phone call in a park instead of at your desk.",
                "If you've got a balcony, get a few plants. Indoor plants help too."
            ];
        }

        // ===== Write result to the DOM =====
        resultScore.textContent = totalScore + '/100';
        resultLabel.textContent = label;
        resultMsg.textContent = message;

        resultTips.innerHTML = '';
        tips.forEach(function (tip) {
            const li = document.createElement('li');
            li.textContent = tip;
            resultTips.appendChild(li);
        });

        // Apply the appropriate colour class
        resultBox.classList.remove('good', 'okay', 'poor');
        resultBox.classList.add(category, 'show');

        // Smooth scroll to the result
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});