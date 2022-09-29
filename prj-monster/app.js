function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100, 
            currentRound: 0
        };
    },
    computed: {
        monsterBarStyles(){
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles(){
            return { width: this.playerHealth + '%' }
        }, 
        myUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        }
    },
    methods: {
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        spacialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healthPlayer(){
            this.currentRound++;
            const healthValue = getRandomValue(8, 20);
            if(this.playerHealth + healthValue > 100){
                this.playerHealth = 100;
            } else {
                this.playerHealth += healthValue
            }
        }
    }
});

app.mount('#game');