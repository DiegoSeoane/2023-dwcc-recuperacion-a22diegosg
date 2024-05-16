const { createApp } = Vue

  createApp({
    data() {
      return {
        monsterHealth : 100,
        playerHealth : 100
      }
    },
    methods:{
        buttonPlayerAttack(){            
            this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * (12-5) + 5);            
            this.playerHealth = this.playerHealth - Math.floor(Math.random() * (15-8) + 8);
        },
        buttonSpecialAttack(){
            return this.monsterHealth - Math.floor(Math.random() * (25-10) + 10);
        },
        buttonHealing(){
            return this.playerHealth + Math.floor(Math.random() * (20-8) + 8);
        }
    }
  }).mount('#game');