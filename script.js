window.addEventListener('DOMContentLoaded', () => {
    const colors = ['#FF9F55', '#52C2B8', '#FF6161', '#A77DF6', '#69E3FF'];
  
    const bubblesContainer = document.querySelector('.bubbles');
    const contentPlaceholder = document.getElementById('content-placeholder');
  
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
  
      const size = Math.floor(Math.random() * 80) + 20;
      const x = Math.floor(Math.random() * 100);
      const duration = Math.floor(Math.random() * 10) + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
  
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${x}%`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.backgroundColor = color;
  
      bubblesContainer.appendChild(bubble);
  
      bubble.addEventListener('animationend', () => {
        bubble.remove();
      });
    };
  
    setInterval(createBubble, 2000);
  
    // Placeholder text of 250 words
    const placeholderText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id suscipit odio. Maecenas pulvinar vestibulum dui, id viverra magna eleifend sed. Proin et ipsum dui. Aliquam erat volutpat. Morbi porttitor urna nec rutrum vulputate. Duis viverra, arcu sit amet ullamcorper elementum, ipsum dui tincidunt nisi, ac consectetur orci neque in sem. Sed euismod fringilla fringilla. Vestibulum eu feugiat dui. Curabitur eu velit dignissim, semper mi id, scelerisque massa. In hac habitasse platea dictumst. Ut laoreet augue ut ipsum aliquet tincidunt. Proin commodo, purus non dictum tincidunt, dolor neque pulvinar elit, sed tristique dui sem in lacus. Donec interdum sem a ligula ullamcorper, et tincidunt odio faucibus. Pellentesque vel mi vel erat efficitur facilisis ac ac urna. Nullam et metus augue. 
  
    In tristique rhoncus dui, sed volutpat leo finibus sit amet. Nullam mattis consequat tortor, vitae iaculis felis sagittis nec. Maecenas eu sapien nec turpis laoreet cursus. Donec sit amet convallis neque. Nullam malesuada tincidunt ex at ultrices. Proin tincidunt sem non arcu laoreet, ut aliquam nisi sollicitudin. Sed aliquam, mi nec faucibus euismod, purus dui aliquet lacus, at efficitur lorem massa in nulla. In tempus semper velit id finibus. Curabitur sed urna et odio elementum gravida. Aliquam semper massa enim, ac blandit risus venenatis ac.`;
  
    contentPlaceholder.innerText = placeholderText;
  });
  