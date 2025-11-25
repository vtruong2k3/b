      // ===== CẤU HÌNH - THAY ĐỔI Ở ĐÂY =====
        const config = {
            name: "Hằng",  // Thay tên ở đây
            imageUrl: "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/544547645_1814142625980550_5568972853921305033_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=W6auUoZ7tNcQ7kNvwEbc0wv&_nc_oc=Adlj5l761THGInXdWiNglkczeshTTib0NimqHVbBIjdbn5lzm5W-q7xq42IrW2aUZhc&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=HDHrdzQhjW28MBJ-af7iLA&oh=00_AfjX9kSa95VrX7HpvYCnBJcfrRXyoDIpnycJVLnDiGIvUA&oe=692AF50A"  // Thay link ảnh ở đây
        };
        // =====================================
        
        const welcomeScreen = document.getElementById('welcomeScreen');
        const bouquetScreen = document.getElementById('bouquetScreen');
        const envelopeScreen = document.getElementById('envelopeScreen');
        const letterScreen = document.getElementById('letterScreen');
        const clickButton = document.getElementById('clickButton');
        const bouquetClick = document.getElementById('bouquetClick');
        const envelopeTop = document.getElementById('envelopeTop');
        const letterPaper = document.getElementById('letterPaper');
        const letterContent = document.getElementById('letterContent');
        const confettiContainer = document.getElementById('confettiContainer');
        
        // Set name and image
        document.getElementById('userName').innerHTML = `Hi ${config.name}! 💖`;
        document.getElementById('letterName').textContent = config.name;
        document.getElementById('profileImage').src = config.imageUrl;
        
        // Create confetti
        function createConfetti() {
            const colors = ['#FFB6C1', '#FF69B4', '#FF1493', '#FFC0CB', '#FFE4E1'];
            const emojis = ['🌸', '💖', '✨', '🌺', '💕', '⭐', '🌼'];
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.animationDelay = Math.random() * 2 + 's';
                    confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
                    
                    if (Math.random() > 0.5) {
                        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                    } else {
                        confetti.style.width = '10px';
                        confetti.style.height = '10px';
                        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                        confetti.style.borderRadius = '50%';
                    }
                    
                    confettiContainer.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 3000);
                }, i * 50);
            }
        }
        
        // Step 1: Click button to show bouquet
        clickButton.addEventListener('click', function() {
            welcomeScreen.style.opacity = '0';
            welcomeScreen.style.transform = 'scale(0.8)';
            welcomeScreen.style.transition = 'all 0.5s ease-out';
            
            setTimeout(() => {
                welcomeScreen.classList.add('hidden');
                bouquetScreen.classList.remove('hidden');
                createConfetti();
            }, 500);
        });
        
        // Step 2: Click bouquet to show envelope opening
        bouquetClick.addEventListener('click', function() {
            bouquetScreen.style.opacity = '0';
            bouquetScreen.style.transform = 'scale(0.8)';
            bouquetScreen.style.transition = 'all 0.5s ease-out';
            
            setTimeout(() => {
                bouquetScreen.classList.add('hidden');
                envelopeScreen.classList.remove('hidden');
                createConfetti();
                
                // Start envelope opening animation
                setTimeout(() => {
                    envelopeTop.classList.add('open');
                    letterPaper.classList.add('slide-up');
                }, 300);
                
                // Show letter after envelope animation
                setTimeout(() => {
                    envelopeScreen.classList.add('hidden');
                    letterScreen.classList.remove('hidden');
                    setTimeout(() => {
                        letterContent.style.opacity = '1';
                    }, 100);
                    createConfetti();
                }, 2500);
            }, 500);
        });