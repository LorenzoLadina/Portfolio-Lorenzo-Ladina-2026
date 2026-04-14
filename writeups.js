const data = [
    // --- LINUX MACHINES ---
    { name: "BoardLight", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/BoardLight-13ef368987d180669855dea9e8b97c6e" },
    { name: "Builder", diff: "Medium", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Builder-147f368987d1804ea354fb168f73deeb" },
    { name: "Cozyhosting", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Cozyhosting-145f368987d18073b72ef281df37e23d" },
    { name: "Intentions", diff: "Hard", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Intentions-148f368987d180cb9679fd41f61bf0e1" },
    { name: "Monitored", diff: "Medium", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Monitored-142f368987d18016918ed100207d76be" },
    { name: "Soccer", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Soccer-14ef368987d18027a073e8eccdc1c47c" },
    { name: "Broker", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Broker-148f368987d18003aff9f677915a549d" },
    { name: "Busqueda", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Busqueda-14cf368987d180308de7c9ac4a665aeb" },
    { name: "Keeper", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Keeper-147f368987d18008b4aaf11609cb001f" },
    { name: "Sau", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Sau-147f368987d18004bfdcf8a415eb889e" },
    { name: "Usage", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Usage-140f368987d18048b819d3dc9856c7c7" },
    { name: "Editorial", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Editorial-150f368987d180c3a945d5f6fbeba704" },
    { name: "UpDown", diff: "Medium", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/UpDown-159f368987d180f9ab4cc3325be14f43" },
    { name: "Pandora", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Pandora-168f368987d180498431e0a6c2836f94" },
    { name: "Magic", diff: "Medium", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Magic-174f368987d180ad8ba4f79a983124c0" },
    { name: "Networked", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Networked-17af368987d180a4b4c4ffadac0c01ac" },
    { name: "Help", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Help-17bf368987d18098abecf6a43f502430" },
    { name: "OpenAdmin", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/OpenAdmin-194f368987d18084a2eee7db223cf877" },
    { name: "Curling", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Curling-195f368987d180bd9cc0c9adcbf6908d" },
    { name: "Shibboleth", diff: "Medium", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Shibboleth-198f368987d1803fa2ddf202b74a6861" },
    { name: "Dog", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Dog-1b5f368987d180efa1a1f67912792b52" },
    { name: "Cap", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Cap-1b9f368987d1809fa129e32e3190f3b1" },
    { name: "Titanic", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Titanic-1baf368987d18006b3d5fc79780d600a" },
    { name: "Strutted", diff: "Medium", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Strutted-1bbf368987d180c0b2cff6367a31c8c6" },
    { name: "Unrested", diff: "Medium", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Unrested-1bbf368987d180e58dfff96288b94059" },
    { name: "GoodGames", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/GoodGames-1c0f368987d180e2b4b7c4d96f41b279" },
    { name: "Paper", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Paper-1c1f368987d1804393cefcd9610c10e8" },
    { name: "Writeup", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Writeup-1c2f368987d18033bbd2dbf7fa038bdd" },
    { name: "Precious", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Precious-1c4f368987d18044a7d7ef15f0c91230" },
    { name: "TwoMillion", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/TwoMillion-1c5f368987d1803ebff6f647e3b51d76" },
    { name: "Analytics", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Analytics-1c8f368987d18080a0b5e6d2cdb313f8" },
    { name: "EvilCUPS", diff: "Medium", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/EvilCUPS-1c8f368987d180a6b83de5603ee02533" },
    { name: "LinkVortex", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/LinkVortex-1d3f368987d1803096a1d3adfa8db19a" },
    { name: "Shocker", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Shocker-1d6f368987d1803fab0cd2297da7cb62" },
    { name: "Valentine", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Valentine-1d6f368987d180bda85ef3e305f8dadb" },
    { name: "Nocturnal", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Nocturnal-1d6f368987d1802ab82bd98602e2280d" },
    { name: "Code", diff: "Easy", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Code-1ddf368987d1802fb239d3183afc1bb1" },
    { name: "Cat", diff: "Medium", os: "Linux", desc: "HTB Linux machine writeup.", tags: ["Linux"], url: "https://joyous-spinach-49f.notion.site/Cat-1dff368987d18065b7e6e2d34b271202" },

    // --- WINDOWS MACHINES ---
    { name: "Mailing", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Mailing-13ff368987d180179871c296f2764bfc" },
    { name: "Aero", diff: "Medium", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Aero-14bf368987d18012ae6fce13407ca894" },
    { name: "Timelapse", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Timelapse-166f368987d180b78848ef19d64fe9e7" },
    { name: "Return", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Return-171f368987d18077ad46c0cbaae334df" },
    { name: "Jeeves", diff: "Medium", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Jeeves-173f368987d180f69e52fcfef8272572" },
    { name: "ServMon", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/ServMon-177f368987d180a4b4b8fd0ea67c5638" },
    { name: "Access", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Access-17df368987d1806589e1e71d36f00542" },
    { name: "Jerry", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Jerry-189f368987d180988cb8c18767ecc208" },
    { name: "Driver", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Driver-189f368987d180bd83c2c54ed24205bc" },
    { name: "Heist", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Heist-18ef368987d1804bbb56c3796baf4a1d" },
    { name: "Remote", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Remote-191f368987d18013990bc9274a4439e1" },
    { name: "Sniper", diff: "Medium", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Sniper-192f368987d180759d74df23172f6eab" },
    { name: "Nest", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Nest-197f368987d180d59dccd600b9b9aeaf" },
    { name: "Hospital", diff: "Medium", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Hospital-1caf368987d180fcb343d55b17dfb74b" },
    { name: "Bastion", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Bastion-1d5f368987d1809da583ef0339f4df48" },
    { name: "Atom", diff: "Medium", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Atom-1d7f368987d1801ebe33d3bb5df7c31e" },
    { name: "Devel", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Devel-1d8f368987d1807aa579fa6bff7aa02d" },
    { name: "Optimum", diff: "Easy", os: "Windows", desc: "HTB Windows machine writeup.", tags: ["Windows"], url: "https://joyous-spinach-49f.notion.site/Optimum-1dbf368987d1802fae9dcad50b8cd9fe" },

    // --- ACTIVE DIRECTORY ---
    { name: "Escape", diff: "Medium", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Escape-14ef368987d1809b96e3f5a65fe68b93" },
    { name: "Flight", diff: "Hard", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Flight-156f368987d180f1a084d6d1f039b47f" },
    { name: "Support", diff: "Easy", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Support-15bf368987d18063873ee70d0746a582" },
    { name: "StreamIO", diff: "Medium", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/StreamIO-160f368987d180f88047ccd94eda3d6c" },
    { name: "Blackfield", diff: "Hard", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Blackfield-173f368987d18043aeb2f4f1dc4b207d" },
    { name: "Cascade", diff: "Medium", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Cascade-175f368987d18099942dd8c1f62929a8" },
    { name: "Sauna", diff: "Easy", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Sauna-176f368987d180a09a5cda3715ebca67" },
    { name: "Monteverde", diff: "Medium", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Monteverde-178f368987d180d3aed6cedc64f3fcfb" },
    { name: "Forest", diff: "Easy", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Forest-17af368987d1809ba3ccfa0f1bdb4d1a" },
    { name: "Active", diff: "Easy", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Active-17df368987d18057a4c2c126084461ce" },
    { name: "Resolute", diff: "Medium", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Resolute-17ff368987d180738449c88202c48b48" },
    { name: "Reel", diff: "Hard", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Reel-17ff368987d180159a45dbab304dfc54" },
    { name: "Mantis", diff: "Hard", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Mantis-185f368987d180e897c4ff76dc875f85" },
    { name: "Cicada", diff: "Easy", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Cicada-18af368987d180569c67ef5447e2bdc9" },
    { name: "Certified", diff: "Medium", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Certified-18bf368987d1807b9b7ed989e32fe054" },
    { name: "Administrator", diff: "Medium", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Administrator-18cf368987d1809991fec8fc4c42365d" },
    { name: "Authority", diff: "Medium", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Authority-1cdf368987d180938407ca6259133646" },
    { name: "Intelligence", diff: "Medium", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Intelligence-1d5f368987d180af97b3df1666a686cf" },
    { name: "Haze", diff: "Hard", os: "Windows", desc: "AD attack chain writeup.", tags: ["AD"], url: "https://joyous-spinach-49f.notion.site/Haze-1d9f368987d1801faab8f973ed27ed89" }
];

let activeFilters = {
    diff: null, // Easy, Medium, Hard
    os: null    // Windows, Linux, AD
};

let currentLimit = 6;

function renderWriteups(isLoadMore = false) {
    const container = document.getElementById('wuContainer');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const searchInput = document.getElementById('wuSearch');
    const search = searchInput ? searchInput.value.toLowerCase() : '';

    if (!container) return;

    if (!isLoadMore) {
        container.innerHTML = '';
        currentLimit = 6;
    }

    const filtered = data.filter(item => {
        
        const matchesDiff = !activeFilters.diff || item.diff === activeFilters.diff;
        
        
        let matchesOS = !activeFilters.os || item.os === activeFilters.os;
        if (activeFilters.os === 'AD') {
            matchesOS = item.tags.includes('AD');
        }

       
        const matchesSearch = item.name.toLowerCase().includes(search) || 
                              item.tags.join(' ').toLowerCase().includes(search);

        return matchesDiff && matchesOS && matchesSearch;
    });

    const start = isLoadMore ? container.childElementCount : 0;
    const itemsToShow = filtered.slice(start, start + 6);

    itemsToShow.forEach(wu => {
        const card = document.createElement('a');
        card.className = 'writeup-card fade in';
        card.href = wu.url;
        card.target = "_blank";
        card.innerHTML = `
            <div class="wu-top">
                <div class="wu-name">${wu.name}</div>
                <div class="wu-diff ${wu.diff.toLowerCase()}">${wu.diff}</div>
            </div>
            <div class="wu-os">${wu.os}</div>
            <div class="wu-desc">${wu.desc}</div>
            <div class="wu-footer">
                <div class="wu-tags">${wu.tags.map(t => `<span class="wu-tag">${t}</span>`).join('')}</div>
                <span class="wu-icon">↗</span>
            </div>
        `;
        container.appendChild(card);
    });

    if (loadMoreBtn) {
        loadMoreBtn.style.display = (filtered.length > container.childElementCount) ? 'flex' : 'none';
    }
}


window.toggleFilter = (value, category) => {
    
    if (activeFilters[category] === value) {
        activeFilters[category] = null;
    } else {
        activeFilters[category] = value;
    }

    
    updateFilterButtons();
    renderWriteups();
};

function updateFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const btnText = btn.innerText;
        const isSelected = (btnText === activeFilters.diff || btnText === activeFilters.os);
        btn.classList.toggle('active', isSelected);
    });
}