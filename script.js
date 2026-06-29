document.addEventListener('DOMContentLoaded', () => {
    const leaveForm = document.getElementById('leaveForm');
    const leaveHistoryList = document.getElementById('leaveHistoryList');
    const emptyState = document.getElementById('emptyState');
    const template = document.getElementById('historyCardTemplate');

    // Default dates (optional UX improvement: set default outDate to today)
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('outDate').value = now.toISOString().slice(0,16);

    leaveForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Get form values
        const leaveType = document.getElementById('leaveType').value;
        const outDateRaw = document.getElementById('outDate').value;
        const inDateRaw = document.getElementById('inDate').value;
        const destination = document.getElementById('destination').value;

        // 2. Format Dates
        const formatOptions = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const outDateFormatted = new Date(outDateRaw).toLocaleDateString('en-US', formatOptions);
        const inDateFormatted = new Date(inDateRaw).toLocaleDateString('en-US', formatOptions);

        // 3. Clone Template
        const clone = template.content.cloneNode(true);
        
        // 4. Populate Data
        clone.querySelector('.leave-type-badge').textContent = leaveType;
        clone.querySelector('.out-time').textContent = outDateFormatted;
        clone.querySelector('.in-time').textContent = inDateFormatted;
        clone.querySelector('.dest-text').textContent = destination;
        
        // Note: The remarks text "Approved by Warden. Checkout done. Check-in pending." 
        // is already hardcoded in the HTML template as requested.

        // 5. Hide Empty State
        if (emptyState) {
            emptyState.style.display = 'none';
        }

        // 6. Add to DOM (Prepend to show latest first)
        leaveHistoryList.insertBefore(clone, leaveHistoryList.firstChild);

        // 7. Reset Form
        leaveForm.reset();
        
        // Reset default out date to now
        document.getElementById('outDate').value = now.toISOString().slice(0,16);
    });
});
