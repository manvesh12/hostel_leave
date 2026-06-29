document.addEventListener('DOMContentLoaded', () => {
    const leaveForm = document.getElementById('cuimsLeaveForm');
    const leaveTableBody = document.getElementById('leaveTableBody');

    leaveForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const leaveType = document.getElementById('leaveType').value;
        const purpose = document.getElementById('purpose').value;
        
        const now = new Date();
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const appliedOn = now.toLocaleDateString('en-GB', options).replace(/ /g, ' '); 

        const studentName = "MANVESH SINGH(24BCS10752)";

        const newRow = document.createElement('tr');
        
        // Exact styling for the custom remark
        newRow.innerHTML = `
            <td>${appliedOn}</td>
            <td>${studentName}</td>
            <td>${leaveType}</td>
            <td>${purpose}</td>
            <td>
                <span class="status-text">Approved</span>
                <span class="status-sub" style="color: #d9241b; font-weight: 500;">Checkout done, Check in pending</span>
            </td>
            <td></td>
        `;

        leaveTableBody.insertBefore(newRow, leaveTableBody.firstChild);
        leaveForm.reset();
    });
});
