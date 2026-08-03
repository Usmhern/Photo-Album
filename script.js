  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzo7FOW_vAVEgqgc6vEAKCetxoc_sRU1uIWZhM1HppRAmEn4kOg4_n4k6LAOl_HKT8/exec";

        const whatsappSvg = `<svg class="btn-icon" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;
        const phoneSvg = `<svg class="btn-icon" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`;
        const editSvg = `<svg class="btn-icon" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`;
        const trashSvg = `<svg class="btn-icon" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`;

  const nigeriaStatesAndLgas = {
            "Abia": ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"],
            "Adamawa": ["Demsa", "Fufure", "Ganye", "Gayuk", "Gombi", "Grie", "Hong", "Jada", "Lamu", "Madagali", "Maiha", "Mayo Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yerva", "Yola North", "Yola South"],
            "Akwa Ibom": ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibiom", "Nsit-Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Uruan", "Urue-Offong/Oruko", "Uyo"],
            "Anambra": ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Nnjikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
            "Bauchi": ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"],
            "Bayelsa": ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"],
            "Benue": ["Agatu", "Apa", "Ado", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Oturkpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"],
            "Borno": ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"],
            "Cross River": ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Yala", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur"],
            "Delta": ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"],
            "Ebonyi": ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"],
            "Edo": ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba Okha", "Orhionmwon", "Oredo", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"],
            "Ekiti": ["Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"],
            "Enugu": ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"],
            "FCT": ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"],
            "Gombe": ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"],
            "Imo": ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West", "Unuimo"],
            "Jigawa": ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kiri Kasama", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"],
            "Kaduna": ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"],
            "Kano": ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"],
            "Katsina": ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danja", "Dan Musa", "Daura", "Dutsi", "Dutsin Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"],
            "Kebbi": ["Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Danko-Wasagu", "Yauri", "Zuru"],
            "Kogi": ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa Muro", "Ofu", "Ogori/Magongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"],
            "Kwara": ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"],
            "Lagos": ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Somolu", "Surulere"],
            "Nasarawa": ["Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa Egon", "Obi", "Toto", "Wamba"],
            "Niger": ["Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Moya", "Paikoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"],
            "Ogun": ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Yewa North", "Yewa South", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Shagamu"],
            "Ondo": ["Akoko North-East", "Akoko North-West", "Akoko South-West", "Akoko South-East", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"],
            "Osun": ["Atakunmosa East", "Atakunmosa West", "Aiyedaade", "Aiyedire", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Ife Central", "Ife East", "Ife North", "Ife South", "Egbedore", "Ejigbo", "Ifedayo", "Ifelodun", "Ila", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"],
            "Oyo": ["Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Iddo", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Iwajowa", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"],
            "Plateau": ["Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang South", "Langtang North", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"],
            "Rivers": ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Eleme", "Emuoha", "Etche", "Gokana", "Ikwerre", "Khana", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omuma", "Opobo/Nkoro", "Oyigbo", "Port Harcourt", "Tai"],
            "Sokoto": ["Binji", "Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"],
            "Taraba": ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kumi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"],
            "Yobe": ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"],
            "Zamfara": ["Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Gummi", "Gusau", "Kaura Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Chafe", "Zurmi"]
        };


        let galleryData = [];
        let isAdminLoggedIn = false;
        let currentUser = null; 
        let chatInterval = null;
        let lastMessageCount = 0;
        let isChatModalOpen = false;
        let editingMessageId = null; // Track message ID when editing

        /* Voice Note Recording Variables */
        let mediaRecorder = null;
        let audioChunks = [];
        let isVoiceRecording = false;
        let recordingSeconds = 0;
        let recordingTimerInterval = null;

        /* Speech-to-Text Variables */
        let recognition = null;
        let isSpeechRecognizing = false;

        async function fetchGalleryData() {
            try {
                const response = await fetch(WEB_APP_URL);
                galleryData = await response.json();
                renderGallery(galleryData);
                checkUnreadMessagesCount();
                setInterval(checkUnreadMessagesCount, 5000);
            } catch (err) {
                console.error("Error fetching data:", err);
                document.getElementById('gallery-grid').innerHTML = '<div class="loading-text">Failed to load memories.</div>';
            }
        }

        async function checkUnreadMessagesCount() {
            try {
                const res = await fetch(`${WEB_APP_URL}?action=getMessages`);
                const data = await res.json();
                if (data.status === 'success' && data.messages) {
                    const totalMsgs = data.messages.length;
                    if (lastMessageCount === 0) {
                        lastMessageCount = totalMsgs;
                    } else if (totalMsgs > lastMessageCount && !isChatModalOpen) {
                        const unreadDiff = totalMsgs - lastMessageCount;
                        const badge = document.getElementById('unread-count-badge');
                        badge.textContent = unreadDiff;
                        badge.classList.add('active');
                    }
                }
            } catch (err) {
                console.error("Error checking unread messages:", err);
            }
        }

        /* --- Chat Theme Toggle --- */
        function toggleChatTheme() {
            const wrapper = document.getElementById('chat-window-wrapper');
            const btn = document.getElementById('theme-toggle-btn');
            const currentTheme = wrapper.getAttribute('data-chat-theme');
            if (currentTheme === 'dark') {
                wrapper.setAttribute('data-chat-theme', 'light');
                btn.textContent = '🌙';
            } else {
                wrapper.setAttribute('data-chat-theme', 'dark');
                btn.textContent = '☀️';
            }
        }

        /* --- Live Chat Authentication & Logic --- */
        function openLiveChat() {
            if (currentUser) {
                showLiveChatModal();
            } else {
                document.getElementById('chat-auth-modal').classList.add('active');
            }
        }

        function verifyChatPhone() {
            const phoneInput = document.getElementById('chat-phone-input').value.trim();
            if (!phoneInput) {
                alert('Please enter your phone number.');
                return;
            }

            const cleanInput = phoneInput.replace(/[^0-9]/g, '');
            const foundUser = galleryData.find(item => {
                const cleanMemberPhone = String(item.phone || '').replace(/[^0-9]/g, '');
                return cleanMemberPhone && (cleanMemberPhone.endsWith(cleanInput) || cleanInput.endsWith(cleanMemberPhone));
            });

            if (foundUser) {
                currentUser = foundUser;
                closeModals();
                showLiveChatModal();
            } else {
                alert('Phone number not found in registered members list. Please ensure your number is registered!');
            }
        }

        function showLiveChatModal() {
            isChatModalOpen = true;
            const userNickname = currentUser.title || currentUser.name;
            document.getElementById('chat-user-badge').textContent = `Logged in as: ${currentUser.name} (${userNickname})`;
            document.getElementById('live-chat-modal').classList.add('active');
            
            document.getElementById('unread-count-badge').classList.remove('active');
            document.getElementById('unread-count-badge').textContent = '0';

            loadChatMessages();

            if (!chatInterval) {
                chatInterval = setInterval(loadChatMessages, 3000);
            }
        }

        function formatMentionsInText(text) {
            if (!text) return '';
            return text.replace(/@([a-zA-Z0-9_.\-\s]+?)(?=\s|$|[.,!?])/g, (match, p1) => {
                return `<span class="chat-mention-tag">@${p1.trim()}</span>`;
            });
        }

        async function loadChatMessages() {
            const container = document.getElementById('chat-messages-container');
            const onlineList = document.getElementById('online-users-list');
            const countText = document.getElementById('online-count-text');

            try {
                const userParam = currentUser ? `&phone=${encodeURIComponent(currentUser.phone)}` : '';
                const res = await fetch(`${WEB_APP_URL}?action=getMessages${userParam}`);
                const data = await res.json();

                if (data.status === 'success') {
                    const messages = data.messages || [];
                    lastMessageCount = messages.length;

                    if (messages.length > 0) {
                        container.innerHTML = '';
                        messages.forEach((msg, idx) => {
                            const msgId = msg.id || idx;
                            const isMe = currentUser && String(msg.phone).replace(/[^0-9]/g, '').endsWith(String(currentUser.phone).replace(/[^0-9]/g, ''));
                            
                            const msgDiv = document.createElement('div');
                            msgDiv.className = `chat-msg ${isMe ? 'me' : 'other'}`;
                            
                            const senderHeader = document.createElement('div');
                            senderHeader.className = 'chat-sender-nickname';
                            senderHeader.textContent = isMe ? 'You' : (msg.senderName || 'Member');

                            const msgBody = document.createElement('div');
                            const content = msg.message || '';

                            if (content.startsWith('data:audio') || content.endsWith('.webm') || content.endsWith('.ogg') || content.endsWith('.mp3')) {
                                msgBody.innerHTML = `
                                    <div style="font-size: 0.8rem; opacity: 0.8; margin-bottom: 2px;">🎤 Voice Note</div>
                                    <audio class="chat-voice-player" controls src="${content}"></audio>
                                `;
                            } else if (content.startsWith('data:image/') || content.match(/\.(jpeg|jpg|png|gif|webp)$/i)) {
                                msgBody.innerHTML = `
                                    <a href="${content}" target="_blank">
                                        <img src="${content}" style="max-width: 200px; max-height: 200px; border-radius: 6px; object-fit: cover; display: block; margin-bottom: 4px;" alt="Shared Image">
                                    </a>
                                `;
                            } else if (content.startsWith('data:application/') || content.startsWith('data:text/')) {
                                msgBody.innerHTML = `
                                    <a href="${content}" download="shared_file" style="color: #53bdeb; text-decoration: underline; display: flex; align-items: center; gap: 4px;">
                                        📄 Download Shared File
                                    </a>
                                `;
                            } else {
                                msgBody.innerHTML = formatMentionsInText(content);
                            }

                            // Edit and Delete buttons for user's own messages
                            if (isMe) {
                                const actionsDiv = document.createElement('div');
                                actionsDiv.className = 'chat-msg-actions';
                                
                                const editBtn = document.createElement('button');
                                editBtn.className = 'msg-action-btn';
                                editBtn.textContent = '✏️ Edit';
                                editBtn.onclick = () => startEditingMessage(msgId, content);

                                const deleteBtn = document.createElement('button');
                                deleteBtn.className = 'msg-action-btn';
                                deleteBtn.textContent = '🗑️ Delete';
                                deleteBtn.onclick = () => deleteChatMessage(msgId);

                                actionsDiv.appendChild(editBtn);
                                actionsDiv.appendChild(deleteBtn);
                                msgDiv.appendChild(actionsDiv);
                            }

                            const timeFormatted = msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
                            const tickIcon = isMe ? '<span class="tick-mark tick-seen">✓✓</span>' : '<span class="tick-mark tick-unseen">✓</span>';

                            const metaDiv = document.createElement('div');
                            metaDiv.className = 'chat-footer-meta';
                            metaDiv.innerHTML = `<span>${timeFormatted}</span> ${tickIcon}`;

                            msgDiv.appendChild(senderHeader);
                            msgDiv.appendChild(msgBody);
                            msgDiv.appendChild(metaDiv);
                            container.appendChild(msgDiv);
                        });
                        container.scrollTop = container.scrollHeight;
                    } else {
                        container.innerHTML = '<div class="loading-text">No messages yet. Say hi or record a voice note!</div>';
                    }

                    const onlinePhones = data.onlineUsers || [];
                    let activeNicknames = [];

                    galleryData.forEach(member => {
                        const cleanMemPhone = String(member.phone || '').replace(/[^0-9]/g, '');
                        if (onlinePhones.some(p => cleanMemPhone.endsWith(p) || p.endsWith(cleanMemPhone))) {
                            activeNicknames.push(member.title || member.name);
                        }
                    });

                    if (currentUser && !activeNicknames.includes(currentUser.title || currentUser.name)) {
                        activeNicknames.unshift(currentUser.title || currentUser.name);
                    }

                    countText.textContent = `Online (${activeNicknames.length}):`;
                    if (activeNicknames.length > 0) {
                        onlineList.textContent = activeNicknames.join(', ');
                    } else {
                        onlineList.textContent = 'Only you active';
                    }
                }
            } catch (err) {
                console.error("Error loading chat messages:", err);
            }
        }

        function startEditingMessage(msgId, currentText) {
            editingMessageId = msgId;
            const input = document.getElementById('chat-msg-input');
            input.value = currentText;
            input.focus();
            input.placeholder = "Editing message... Press Send to update";
        }

        async function deleteChatMessage(msgId) {
            if (!confirm('Are you sure you want to delete this message?')) return;
            try {
                const payload = {
                    action: 'deleteMessage',
                    messageId: msgId,
                    phone: currentUser.phone
                };
                await fetch(WEB_APP_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(payload)
                });
                await loadChatMessages();
            } catch (err) {
                console.error("Error deleting message:", err);
            }
        }

        /* --- @Mention Dropdown & Typing Handler --- */
        function handleMentionInput(e) {
            const input = e.target;
            const text = input.value;
            const dropdown = document.getElementById('mention-dropdown');
            const lastAtIndex = text.lastIndexOf('@');
            
            if (lastAtIndex !== -1 && lastAtIndex >= text.length - 15) {
                const query = text.substring(lastAtIndex + 1).toLowerCase();
                const matches = galleryData.filter(m => {
                    const nick = (m.title || '').toLowerCase();
                    const name = (m.name || '').toLowerCase();
                    return nick.includes(query) || name.includes(query);
                });

                if (matches.length > 0) {
                    dropdown.innerHTML = '';
                    matches.forEach(member => {
                        const nickname = member.title || member.name;
                        const item = document.createElement('div');
                        item.className = 'mention-item';
                        item.innerHTML = `👤 <strong>@${nickname}</strong> <span style="font-size:0.75rem; opacity:0.6;">(${member.name})</span>`;
                        item.onclick = () => selectMention(nickname, lastAtIndex);
                        dropdown.appendChild(item);
                    });
                    dropdown.classList.add('active');
                    return;
                }
            }
            dropdown.classList.remove('active');
        }

        function selectMention(nickname, atIndex) {
            const input = document.getElementById('chat-msg-input');
            const dropdown = document.getElementById('mention-dropdown');
            const text = input.value;
            const beforeAt = text.substring(0, atIndex);
            input.value = `${beforeAt}@${nickname} `;
            dropdown.classList.remove('active');
            input.focus();
        }

        async function sendChatMessage() {
            const input = document.getElementById('chat-msg-input');
            const dropdown = document.getElementById('mention-dropdown');
            const messageText = input.value.trim();
            const sendBtn = document.getElementById('send-msg-btn');

            if (!messageText) return;

            dropdown.classList.remove('active');
            input.value = '';
            input.placeholder = "Type a message... (Type @ to mention)";
            sendBtn.disabled = true;

            const userNickname = currentUser.title || currentUser.name;
            let payload = {
                action: editingMessageId ? 'editMessage' : 'sendMessage',
                senderName: userNickname,
                phone: currentUser.phone,
                message: messageText
            };

            if (editingMessageId) {
                payload.messageId = editingMessageId;
                editingMessageId = null;
            }

            try {
                await fetch(WEB_APP_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(payload)
                });
                await loadChatMessages();
            } catch (err) {
                console.error("Error sending message:", err);
            } finally {
                sendBtn.disabled = false;
            }
        }

        function handleChatKeyPress(event) {
            if (event.key === 'Enter') {
                sendChatMessage();
            }
        }

        /* --- 📁 File & Photo Upload in Chat --- */
        async function handleChatFileUpload(input) {
            if (input.files && input.files[0]) {
                const file = input.files[0];
                const reader = new FileReader();
                
                reader.onload = async function(e) {
                    const base64Data = e.target.result;
                    const userNickname = currentUser.title || currentUser.name;

                    const payload = {
                        action: 'sendMessage',
                        senderName: userNickname,
                        phone: currentUser.phone,
                        message: base64Data
                    };

                    try {
                        await fetch(WEB_APP_URL, {
                            method: 'POST',
                            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                            body: JSON.stringify(payload)
                        });
                        await loadChatMessages();
                    } catch (err) {
                        console.error("Error uploading file to chat:", err);
                    } finally {
                        input.value = '';
                    }
                };
                reader.readAsDataURL(file);
            }
        }

        /* --- ✍️ Voice-to-Text Feature --- */
        function toggleSpeechToText() {
            const speechBtn = document.getElementById('speech-to-text-btn');
            const input = document.getElementById('chat-msg-input');

            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                alert('Speech-to-text is not supported in this browser. Try Google Chrome or Edge.');
                return;
            }

            if (!isSpeechRecognizing) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = true;
                recognition.lang = 'en-US';

                recognition.onstart = () => {
                    isSpeechRecognizing = true;
                    speechBtn.classList.add('active-glow');
                    speechBtn.title = "Listening... Click to stop";
                };

                recognition.onresult = (event) => {
                    let transcript = '';
                    for (let i = event.resultIndex; i < event.results.length; i++) {
                        transcript += event.results[i][0].transcript;
                    }
                    input.value = transcript;
                };

                recognition.onerror = (event) => {
                    console.error("Speech recognition error", event.error);
                    stopSpeechToText();
                };

                recognition.onend = () => {
                    stopSpeechToText();
                };

                recognition.start();
            } else {
                if (recognition) recognition.stop();
                stopSpeechToText();
            }
        }

        function stopSpeechToText() {
            isSpeechRecognizing = false;
            const speechBtn = document.getElementById('speech-to-text-btn');
            if (speechBtn) {
                speechBtn.classList.remove('active-glow');
                speechBtn.title = "Speech to Text (Voice typing)";
            }
        }

        /* --- 🎙️ Voice Note Recording & Playback --- */
        async function toggleVoiceNoteRecording() {
            if (!isVoiceRecording) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    mediaRecorder = new MediaRecorder(stream);
                    audioChunks = [];

                    mediaRecorder.ondataavailable = event => {
                        audioChunks.push(event.data);
                    };

                    mediaRecorder.onstop = async () => {
                        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                        await uploadAndSendVoiceNote(audioBlob);
                    };

                    mediaRecorder.start();
                    isVoiceRecording = true;
                    recordingSeconds = 0;

                    document.getElementById('voice-record-btn').classList.add('active-glow');
                    document.getElementById('chat-msg-input').style.display = 'none';
                    document.getElementById('recording-indicator').classList.add('active');

                    recordingTimerInterval = setInterval(() => {
                        recordingSeconds++;
                        document.getElementById('recording-timer').textContent = `${recordingSeconds}s`;
                    }, 1000);

                } catch (err) {
                    alert('Microphone permission denied or not supported.');
                    console.error("Mic Error:", err);
                }
            } else {
                stopAndSendVoiceNote();
            }
        }

        function stopAndSendVoiceNote() {
            if (mediaRecorder && isVoiceRecording) {
                mediaRecorder.stop();
                mediaRecorder.stream.getTracks().forEach(track => track.stop());
                
                isVoiceRecording = false;
                clearInterval(recordingTimerInterval);

                document.getElementById('voice-record-btn').classList.remove('active-glow');
                document.getElementById('chat-msg-input').style.display = 'block';
                document.getElementById('recording-indicator').classList.remove('active');
            }
        }

        async function uploadAndSendVoiceNote(blob) {
            const sendBtn = document.getElementById('send-msg-btn');
            sendBtn.disabled = true;

            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = async () => {
                const base64Audio = reader.result;
                const userNickname = currentUser.title || currentUser.name;

                const payload = {
                    action: 'sendMessage',
                    senderName: userNickname,
                    phone: currentUser.phone,
                    message: base64Audio
                };

                try {
                    await fetch(WEB_APP_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                        body: JSON.stringify(payload)
                    });
                    await loadChatMessages();
                } catch (err) {
                    console.error("Error sending voice note:", err);
                } finally {
                    sendBtn.disabled = false;
                }
            };
        }

        function populateStateOptions(selectId) {
            const stateSelect = document.getElementById(selectId);
            stateSelect.innerHTML = selectId === 'filter-state' ? '<option value="">STATE</option>' : '<option value="">-- Choose State --</option>';
            
            Object.keys(nigeriaStatesAndLgas).sort().forEach(state => {
                const opt = document.createElement('option');
                opt.value = state;
                opt.textContent = state;
                stateSelect.appendChild(opt);
            });
        }

        function handleStateChange(stateSelectId, lgaContainerId, lgaSelectId) {
            const stateSelect = document.getElementById(stateSelectId);
            const lgaContainer = document.getElementById(lgaContainerId);
            const lgaSelect = document.getElementById(lgaSelectId);
            const selectedState = stateSelect.value;

            if (selectedState && nigeriaStatesAndLgas[selectedState]) {
                lgaSelect.innerHTML = '<option value="">-- Choose LGA --</option>';
                nigeriaStatesAndLgas[selectedState].forEach(lga => {
                    const opt = document.createElement('option');
                    opt.value = lga;
                    opt.textContent = lga;
                    lgaSelect.appendChild(opt);
                });
                lgaContainer.style.display = 'block';
            } else {
                lgaContainer.style.display = 'none';
                lgaSelect.innerHTML = '<option value="">-- Choose LGA --</option>';
            }
        }

        function onFilterStateChange() {
            const selectedState = document.getElementById('filter-state').value;
            const lgaSelect = document.getElementById('filter-lga');

            if (selectedState && nigeriaStatesAndLgas[selectedState]) {
                lgaSelect.innerHTML = '<option value="">-- All Local Governments --</option>';
                nigeriaStatesAndLgas[selectedState].forEach(lga => {
                    const opt = document.createElement('option');
                    opt.value = lga;
                    opt.textContent = lga;
                    lgaSelect.appendChild(opt);
                });
                lgaSelect.disabled = false;
            } else {
                lgaSelect.innerHTML = '<option value="">-- Select State First --</option>';
                lgaSelect.disabled = true;
            }

            applyLocationFilter();
        }

        function applyLocationFilter() {
            const selectedState = document.getElementById('filter-state').value;
            const selectedLga = document.getElementById('filter-lga').value;

            let filtered = galleryData;
            if (selectedState) {
                filtered = filtered.filter(item => (item.state || '').toLowerCase() === selectedState.toLowerCase());
            }
            if (selectedLga) {
                filtered = filtered.filter(item => (item.lga || '').toLowerCase() === selectedLga.toLowerCase());
            }
            renderGallery(filtered);
        }

        function resetFilters() {
            document.getElementById('filter-state').value = '';
            const lgaSelect = document.getElementById('filter-lga');
            lgaSelect.innerHTML = '<option value="">-- Select State First --</option>';
            lgaSelect.disabled = true;
            renderGallery(galleryData);
        }

        function renderGallery(dataToRender = galleryData) {
            const grid = document.getElementById('gallery-grid');
            grid.innerHTML = '';

            if (!Array.isArray(dataToRender) || dataToRender.length === 0) {
                grid.innerHTML = '<div class="loading-text">No members found matching this location!</div>';
                return;
            }

            dataToRender.forEach((item) => {
                const phoneStr = String(item.phone || '');
                const cleanPhone = phoneStr.replace(/[^0-9+]/g, '');
                const waLink = cleanPhone ? `https://wa.me/${cleanPhone}` : '#';
                const callLink = cleanPhone ? `tel:${cleanPhone}` : '#';

                const article = document.createElement('article');
                article.className = 'photo-item';

                const imgWrapper = document.createElement('div');
                imgWrapper.className = 'image-wrapper';
                imgWrapper.onclick = () => previewImage(item.img, item.name);

                const img = document.createElement('img');
                img.src = item.img;
                img.alt = item.name;
                img.loading = 'lazy';
                
                img.onerror = function() {
                    this.onerror = null;
                    this.src = "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80";
                };

                const overlay = document.createElement('div');
                overlay.className = 'image-overlay-hint';
                overlay.textContent = '🔍 Click to Preview';

                imgWrapper.appendChild(img);
                imgWrapper.appendChild(overlay);

                const cardContent = document.createElement('div');
                cardContent.className = 'card-content';

                const playerTitle = document.createElement('div');
                playerTitle.className = 'player-title';
                playerTitle.textContent = item.title;

                const nameHeader = document.createElement('h3');
                nameHeader.textContent = item.name;

                const locationTag = document.createElement('div');
                locationTag.className = 'location-tag';
                if (item.state && item.lga) {
                    locationTag.textContent = `📍 ${item.lga}, ${item.state}`;
                } else if (item.state) {
                    locationTag.textContent = `📍 ${item.state}`;
                }

                const actionBtns = document.createElement('div');
                actionBtns.className = 'action-btns';

                const waAnchor = document.createElement('a');
                waAnchor.href = waLink;
                waAnchor.target = '_blank';
                waAnchor.rel = 'noopener noreferrer';
                waAnchor.className = 'whatsapp-btn';
                waAnchor.innerHTML = `${whatsappSvg} Chat`;

                const callAnchor = document.createElement('a');
                callAnchor.href = callLink;
                callAnchor.className = 'call-btn';
                callAnchor.innerHTML = `${phoneSvg} Call`;

                actionBtns.appendChild(waAnchor);
                actionBtns.appendChild(callAnchor);

                cardContent.appendChild(playerTitle);
                cardContent.appendChild(nameHeader);
                if (item.state) cardContent.appendChild(locationTag);
                cardContent.appendChild(actionBtns);

                article.appendChild(imgWrapper);
                article.appendChild(cardContent);

                grid.appendChild(article);
            });
        }

        function checkAdminAccess() {
            if (isAdminLoggedIn) {
                openAdminDashboard();
            } else {
                document.getElementById('login-modal').classList.add('active');
            }
        }

        function verifyAdmin() {
            const pass = document.getElementById('admin-pass').value;
            if (pass === '0000') {
                isAdminLoggedIn = true;
                document.getElementById('logout-btn').style.display = 'inline-block';
                document.getElementById('admin-pass').value = '';
                closeModals();
                openAdminDashboard();
            } else {
                alert('Incorrect Admin Passcode!');
            }
        }

        function adminLogout() {
            isAdminLoggedIn = false;
            document.getElementById('logout-btn').style.display = 'none';
            alert('Logged out of Admin panel.');
        }

        function openAdminDashboard() {
            document.getElementById('admin-modal').classList.add('active');
            renderAdminManageList();
        }

        function closeModals() {
            isChatModalOpen = false;
            document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
            document.getElementById('mention-dropdown').classList.remove('active');
            if (isVoiceRecording) stopAndSendVoiceNote();
            if (isSpeechRecognizing && recognition) recognition.stop();
            if (chatInterval) {
                clearInterval(chatInterval);
                chatInterval = null;
            }
        }

        function closeEditModal() {
            document.getElementById('edit-modal').classList.remove('active');
        }

        function renderAdminManageList() {
            const list = document.getElementById('admin-manage-list');
            list.innerHTML = '';
            
            galleryData.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'admin-manage-item';
                div.style.display = 'flex';
                div.style.justifySpace = 'space-between';
                div.style.padding = '0.5rem 0';

                const span = document.createElement('span');
                const locInfo = item.state ? ` - ${item.state}` : '';
                span.textContent = `${item.name} (${item.title}${locInfo})`;

                const actionDiv = document.createElement('div');
                actionDiv.className = 'admin-item-actions';

                const editBtn = document.createElement('button');
                editBtn.className = 'btn-edit';
                editBtn.innerHTML = `${editSvg} Edit`;
                editBtn.onclick = () => openEditModal(index);

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'btn-delete';
                deleteBtn.innerHTML = `${trashSvg} Delete`;
                deleteBtn.onclick = () => deleteMemberEntry(index);

                actionDiv.appendChild(editBtn);
                actionDiv.appendChild(deleteBtn);

                div.appendChild(span);
                div.appendChild(actionDiv);
                list.appendChild(div);
            });
        }

        function openEditModal(index) {
            const item = galleryData[index];
            document.getElementById('edit-preview-img').src = item.img;
            document.getElementById('edit-preview-name').textContent = item.name;
            document.getElementById('edit-row-id').value = item.rowId || '';
            document.getElementById('edit-index').value = index;
            document.getElementById('edit-file').value = ''; 
            document.getElementById('edit-name').value = item.name || '';
            document.getElementById('edit-title').value = item.title || '';
            document.getElementById('edit-phone').value = item.phone || '';

            const stateSelect = document.getElementById('edit-state');
            stateSelect.value = item.state || '';
            handleStateChange('edit-state', 'edit-lga-container', 'edit-lga');
            if (item.lga) {
                document.getElementById('edit-lga').value = item.lga;
            }
            document.getElementById('edit-modal').classList.add('active');
        }

        function previewNewEditImage(input) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('edit-preview-img').src = e.target.result;
                };
                reader.readAsDataURL(input.files[0]);
            }
        }

        async function saveMemberEdit() {
            const index = document.getElementById('edit-index').value;
            const rowId = document.getElementById('edit-row-id').value;
            const saveBtn = document.getElementById('save-edit-btn');
            const fileInput = document.getElementById('edit-file');

            const payload = {
                action: 'edit',
                rowId: rowId,
                existingImg: galleryData[index].img,
                name: document.getElementById('edit-name').value.trim(),
                title: document.getElementById('edit-title').value.trim(),
                phone: document.getElementById('edit-phone').value.trim(),
                state: document.getElementById('edit-state').value,
                lga: document.getElementById('edit-lga').value
            };

            saveBtn.disabled = true;
            saveBtn.textContent = "Saving...";

            const performSubmit = async (dataPayload) => {
                try {
                    const response = await fetch(WEB_APP_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                        body: JSON.stringify(dataPayload)
                    });

                    const res = await response.json();
                    if (res.status === 'success') {
                        galleryData[index].name = dataPayload.name;
                        galleryData[index].title = dataPayload.title;
                        galleryData[index].phone = dataPayload.phone;
                        galleryData[index].state = dataPayload.state;
                        galleryData[index].lga = dataPayload.lga;
                        if (res.imageUrl) {
                            galleryData[index].img = res.imageUrl;
                        }

                        applyLocationFilter();
                        renderAdminManageList();
                        closeEditModal();
                        alert('Updated successfully!');
                    } else {
                        alert('Failed to update: ' + res.message);
                    }
                } catch (err) {
                    console.error(err);
                    alert('Error updating details.');
                } finally {
                    saveBtn.disabled = false;
                    saveBtn.textContent = "Save Changes";
                }
            };

            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const reader = new FileReader();
                reader.onload = function(e) {
                    payload.bytes = e.target.result.split(',')[1];
                    payload.filename = file.name;
                    payload.mimeType = file.type;
                    performSubmit(payload);
                };
                reader.readAsDataURL(file);
            } else {
                performSubmit(payload);
            }
        }

        async function deleteMemberEntry(index) {
            const item = galleryData[index];
            if (!confirm(`Are you sure you want to permanently delete "${item.name}"?`)) return;

            try {
                const response = await fetch(WEB_APP_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify({
                        action: 'delete',
                        rowId: item.rowId
                    })
                });

                const res = await response.json();
                if (res.status === 'success') {
                    galleryData.splice(index, 1);
                    applyLocationFilter();
                    renderAdminManageList();
                    alert('Deleted successfully!');
                } else {
                    alert('Failed to delete: ' + res.message);
                }
            } catch (err) {
                console.error(err);
                alert('An error occurred while deleting.');
            }
        }

        function previewImage(src, name) {
            const modal = document.getElementById('preview-modal');
            const img = document.getElementById('preview-img');
            const caption = document.getElementById('preview-caption');
            img.src = src;
            caption.textContent = name;
            modal.classList.add('active');
            
            const BSound = document.getElementById("BSound");
            if (BSound) {
                BSound.currentTime = 0;
                BSound.play().catch(err => console.error(err));
            }
        }

        async function addPhotoEntry() {
            const fileInput = document.getElementById('input-file');
            const nameInput = document.getElementById('input-name');
            const titleInput = document.getElementById('input-title');
            const phoneInput = document.getElementById('input-phone');
            const stateInput = document.getElementById('input-state');
            const lgaInput = document.getElementById('input-lga');
            const publishBtn = document.getElementById('publish-btn');

            if (fileInput.files.length === 0 || !nameInput.value.trim() || !phoneInput.value.trim()) {
                alert('Please select an image file, enter a name, and provide a phone number!');
                return;
            }

            const file = fileInput.files[0];
            const reader = new FileReader();

            publishBtn.disabled = true;
            publishBtn.textContent = "Uploading...";

            reader.onload = async function(e) {
                const base64String = e.target.result.split(',')[1];
                const payload = {
                    filename: file.name,
                    mimeType: file.type,
                    bytes: base64String,
                    name: nameInput.value.trim(),
                    title: titleInput.value.trim() || 'Member',
                    phone: phoneInput.value.trim(),
                    state: stateInput.value || '',
                    lga: lgaInput.value || ''
                };

                try {
                    const response = await fetch(WEB_APP_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                        body: JSON.stringify(payload)
                    });

                    const result = await response.json();
                    if (result.status === "success") {
                        galleryData.push(result.entry);
                        applyLocationFilter();
                        renderAdminManageList();

                        fileInput.value = '';
                        nameInput.value = '';
                        titleInput.value = '';
                        phoneInput.value = '';
                        stateInput.value = '';
                        lgaInput.value = '';
                        document.getElementById('lga-container').style.display = 'none';

                        alert('Success! Image and details published globally.');
                    } else {
                        alert('Upload failed: ' + result.message);
                    }
                } catch (err) {
                    console.error(err);
                    alert('An error occurred during upload.');
                } finally {
                    publishBtn.disabled = false;
                    publishBtn.textContent = "Publish to Album";
                }
            };
            reader.readAsDataURL(file);
        }

        populateStateOptions('filter-state');
        populateStateOptions('input-state');
        populateStateOptions('edit-state');
        fetchGalleryData();
  

    <!-- Intro Animation Script -->
          (function () {
            const lines = [
                "WELCOME TO CS 2K24 DIGITAL PHOTO ALBUM.",
                "O Allah, the Most Merciful, the Most Compassionate",
                "We thank You for the gift of life, knowledge, and the beautiful moments we shared as the Computer Science Class of 2K24.",
                "O Allah, forgive those among us who have passed away, especially our beloved brother and mentor, UMAR ADAMU IBBI (Sarki).",
                "🤲🏽 آمِينَ"
            ];

            const typingSpeed = 10;
            const pauseBetweenLines = 10;

            document.addEventListener('DOMContentLoaded', () => {
                const overlay = document.getElementById('intro-overlay');
                const enterBtn = document.getElementById('enter-btn');
                const welcomeSound = document.getElementById("welcomeSound");

                const elements = [
                    document.getElementById('line-1'),
                    document.getElementById('line-2'),
                    document.getElementById('line-3'),
                    document.getElementById('line-4'),
                    document.getElementById('line-5')
                ];

                function typeInto(element, htmlText, speed) {
                    return new Promise((resolve) => {
                        element.innerHTML = '';
                        let i = 0;
                        function step() {
                            if (i < htmlText.length) {
                                element.innerHTML += htmlText.charAt(i);
                                i++;
                                setTimeout(step, speed);
                            } else {
                                resolve();
                            }
                        }
                        step();
                    });
                }

                async function runTypingSequence() {
                    for (let i = 0; i < lines.length; i++) {
                        if (elements[i]) {
                            await typeInto(elements[i], lines[i], typingSpeed);
                            await new Promise(r => setTimeout(r, pauseBetweenLines));
                        }
                    }
                    if (enterBtn) enterBtn.style.display = 'inline-block';
                }

                function openBookEffect() {
                    overlay.classList.add('opening');
                    if (welcomeSound) {
                        welcomeSound.currentTime = 0;
                        welcomeSound.play().catch(err => console.error(err));
                    }
                    setTimeout(() => {
                        overlay.style.display = 'none';
                        document.body.classList.remove('intro-active');
                    }, 1500);
                }

                overlay.classList.remove('hidden');
                document.body.classList.add('intro-active');
                if (enterBtn) {
                    enterBtn.style.display = 'none';
                    enterBtn.addEventListener('click', openBookEffect);
                }

                runTypingSequence();
            });
        })();
