document.addEventListener('DOMContentLoaded', () => {
    const leaveForm = document.getElementById('cuimsLeaveForm');
    const leaveTableBody = document.getElementById('leaveTableBody');
    const studentName = "MANVESH SINGH(24BCS10752)";

    // Default data so it looks like the screenshot initially
    const defaultLeaves = [
        { id: 1, appliedOn: "24 Jun 2026", type: "Day Out", purpose: "internship hour" },
        { id: 2, appliedOn: "14 Jun 2026", type: "Night Out Leave", purpose: "Visiting Home" },
        { id: 3, appliedOn: "12 May 2026", type: "Day Out", purpose: "-H/M/" },
        { id: 4, appliedOn: "20 Mar 2026", type: "Day Out", purpose: "doctor" },
        { id: 5, appliedOn: "21 Mar 2026", type: "Day Out", purpose: "Visiting Chandigarh" }
    ];

    // Load from local storage, or use defaults if empty
    let leaves = JSON.parse(localStorage.getItem('cuimsHostelLeaves'));
    if (!leaves) {
        leaves = defaultLeaves;
        saveLeaves();
    }

    // Function to save current state to local storage
    function saveLeaves() {
        localStorage.setItem('cuimsHostelLeaves', JSON.stringify(leaves));
    }

    // Function to render the table based on the 'leaves' array
    function renderLeaves() {
        leaveTableBody.innerHTML = '';
        leaves.forEach(leave => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${leave.appliedOn}</td>
                <td>${studentName}</td>
                <td>${leave.type}</td>
                <td>${leave.purpose}</td>
                <td>
                    <span class="status-text">Approved</span>
                    <span class="status-sub" style="color: #d9241b; font-weight: 500;">Checkout done, Check in pending</span>
                </td>
                <td style="text-align: center;">
                    <i class="fas fa-trash-alt delete-btn" data-id="${leave.id}" style="color: #666; cursor: pointer; font-size: 14px;" title="Remove Entry" onmouseover="this.style.color='#d9241b'" onmouseout="this.style.color='#666'"></i>
                </td>
            `;
            leaveTableBody.appendChild(row);
        });
    }

    // Initial render
    renderLeaves();

    // Form submission
    leaveForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const leaveType = document.getElementById('leaveType').value;
        const purpose = document.getElementById('purpose').value;
        
        const now = new Date();
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const appliedOn = now.toLocaleDateString('en-GB', options).replace(/ /g, ' '); 

        const newLeave = {
            id: Date.now(),
            appliedOn: appliedOn,
            type: leaveType,
            purpose: purpose
        };

        // Add to the top of the array
        leaves.unshift(newLeave);
        saveLeaves();
        renderLeaves();

        leaveForm.reset();
    });

    // Handle delete clicks via event delegation
    leaveTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const idToRemove = parseInt(e.target.getAttribute('data-id'));
            leaves = leaves.filter(leave => leave.id !== idToRemove);
            saveLeaves();
            renderLeaves();
        }
    });

    // Mobile sidebar toggle
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    if(menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
});
