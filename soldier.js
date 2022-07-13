const soldier = {
    name: 'bot',
    helth: 10,
    weapon: {
        weaponName: 'FNScar',
        ammunition: 30,
    },
    supplies: 3,
    getFire: function () {
        if (this.ammunition = 0) {
            'обойма пуста. Перезарядитесь.'
        }
        { 
            this.ammunition--;
            return 'бах-бах'
        }
    },
    getRecharge: function () {
        if (this.supplies = 0) {
            console.log('не осталось припасов')
        } else {
        this.ammunition = 30;
        this.supplies--; 
        return 'перезарядка...'
        }
    },
    getHurt: function () {
        if (this.helth = 0) {
            console.log('Ты проиграл')
        } else {
        this.helth--, this.helth = 0
        }
    },
}