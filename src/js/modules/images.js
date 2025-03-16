const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img'),
        body = document.body;

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      bigImage.style.cssText = `
        width: 100%;
        max-width: 25vw;
        height: auto;
        border-radius: 10px;
        cursor: pointer;
      `;
      body.classList.add('no-scroll');
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      body.classList.remove('no-scroll');
    }
  });
};

export default images;