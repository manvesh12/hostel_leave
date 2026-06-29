document.addEventListener('DOMContentLoaded', () => {
    const leaveForm = document.getElementById('cuimsLeaveForm');
    const leaveTableBody = document.getElementById('leaveTableBody');

    leaveForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const leaveType = document.getElementById('leaveType').value;
        const purpose = document.getElementById('purpose').value;
        
        // Generate current date for 'Applied on' column
        const now = new Date();
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const appliedOn = now.toLocaleDateString('en-GB', options).replace(/ /g, ' '); 
        // Example output: 30 Jun 2026

        // Hardcoded Name mimicking the screenshot
        const studentName = "MANVESH SHARMA(23BCS1234)";

        // Create new row
        const newRow = document.createElement('tr');
        
        newRow.innerHTML = `
            <td>${appliedOn}</td>
            <td>${studentName}</td>
            <td>${leaveType}</td>
            <td>${purpose}</td>
            <td class="text-blue">approved by warden checlout done check in peding</td>
            <td></td>
        `;

        // Prepend to show at the top of the table
        leaveTableBody.insertBefore(newRow, leaveTableBody.firstChild);

        // Reset form
        leaveForm.reset();
    });
});
