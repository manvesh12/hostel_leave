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

        const studentName = "MANVESH SHARMA(23BCS1234)";

        const newRow = document.createElement('tr');
        
        newRow.innerHTML = `
            <td>${appliedOn}</td>
            <td>${studentName}</td>
            <td>${leaveType}</td>
            <td>${purpose}</td>
            <td class="status-approved">Approved<br><span style="color: #666; font-size: 9px; font-weight: 400;">Checkout done, Check in pending</span></td>
            <td></td>
        `;

        leaveTableBody.insertBefore(newRow, leaveTableBody.firstChild);

        leaveForm.reset();
    });
});
