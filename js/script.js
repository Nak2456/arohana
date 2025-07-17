// Simple modal logic for Sign In and Sign Up popups

// Create modal elements dynamically for simplicity
function createModal(id, title) {
  const modal = document.createElement('div');
  modal.id = id;
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.backgroundColor = 'rgba(0,0,0,0.6)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '2000';
  modal.style.visibility = 'hidden';

  modal.innerHTML = `
    <div style="background:#fff; padding: 30px; border-radius: 10px; width: 300px; position: relative;">
      <h2 style="margin-bottom: 20px;">${title}</h2>
      <form>
        <input type="email" placeholder="Email" required style="width:100%; padding:10px; margin-bottom:15px;"/>
        <input type="password" placeholder="Password" required style="width:100%; padding:10px; margin-bottom:15px;"/>
        <button type="submit" style="width:100%; padding:10px; background:#4CAF50; color:#fff; border:none; border-radius:5px; cursor:pointer;">Submit</button>
      </form>
      <button id="${id}Close" style="position:absolute; top:10px; right:15px; background:none; border:none; font-size:20px; cursor:pointer;">&times;</button>
    </div>
  `;
  document.body.appendChild(modal);

  // Close button
  document.getElementById(`${id}Close`).addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });

  // Close modal on clicking outside the form box
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.visibility = 'hidden';
  });

  // Prevent actual form submission (no backend here)
  modal.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    alert(`${title} form submitted! (This is just a demo)`);
    modal.style.visibility = 'hidden';
  });

  return modal;
}

// Create modals
const signInModal = createModal('signInModal', 'Sign In');
const signUpModal = createModal('signUpModal', 'Sign Up');

// Open modals when buttons clicked
document.getElementById('signInBtn').addEventListener('click', e => {
  e.preventDefault();
  signInModal.style.visibility = 'visible';
});

document.getElementById('signUpBtn').addEventListener('click', e => {
  e.preventDefault();
  signUpModal.style.visibility = 'visible';
});

// Explore button navigation
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    window.location.href = 'products.html';
  });
}
