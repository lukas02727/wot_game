const bitva = document.getElementById("bitva");
const garaz = document.getElementById("garaz");
const battleField = document.getElementById("bitevni_pole");
const home = document.getElementsByClassName('home');
const upgrade = document.getElementById("upgrade");
const shop = document.getElementById("shop");
const skiny = document.getElementById("skiny");
const skins = document.getElementById("skins");
const boss = document.getElementById("bos");
const defeateBoss = document.getElementById("defeate_bos");
const lehky = document.getElementById("lehky");
const lehkaBitva = document.getElementById("lehka_bitva");
const BasicTank = document.getElementsByClassName('basic_tank');
const EnemyLehky = document.getElementsByClassName('enemy_tank_lehky');


const coins = document.getElementsByClassName('coins');
const utok = document.getElementById("button_attack");
const naboj = document.getElementById("naboj");
const ohen = document.getElementById("ohen");
const zivoty2 = document.getElementById("pocet_zivotu_enemy");
const objekt = document.getElementsByClassName('basic_tank_lehky');
const zivoty = document.getElementById("pocet_zivotu_lehky");



const stredniBitva = document.getElementById("stredni_bitva");
const stredni = document.getElementById("stredni");
const zivoty3 = document.getElementById("pocet_zivotu_enemy_stredni");
const attackStredni = document.getElementById("button_attack_stredni");
const ohena = document.getElementById("ohena");
const naboja = document.getElementById("naboja");
const zivotyStredni = document.getElementById("pocet_zivotu_stredni");

const tezkabitva = document.getElementById("tezka_bitva");
const tezky = document.getElementById("tezky");
const zivoty4 = document.getElementById("pocet_zivotu_enemy_tezky");
const attackTezky = document.getElementById("button_attack_tezky");
const ohenb = document.getElementById("ohenb");
const nabojb = document.getElementById("nabojb");
const zivotyTezky = document.getElementById("pocet_zivotu_tezky");

const pocetZivotu = document.getElementsByClassName('pocet_zivotu');
const UpgradeHpPet = document.getElementById("upgrade_hp_5");
const upgradeHpDvacet = document.getElementById("upgrade_hp_20");
const upgradeAttackJedna = document.getElementById("upgrade_attack_1");
const pocetAttacku = document.getElementsByClassName('pocet_attacku');
const upgradeAttackPet = document.getElementById("upgrade_attack_5");

const buttonAttackBoss = document.getElementById("button_attack_boss");
const tvojeZivotyBoss = document.getElementById("pocet_zivotu_boss");
const pocetzivotuboss = document.getElementById("pocet_zivotu_enemy_boss");
const ohenbos = document.getElementById("ohenbos");
const nabojbos = document.getElementById("nabojbos");
const defeatedBoss = document.getElementById("defeate_bos");

let playerHP = 50;
let playerAttack = 2;

bitva.onclick = () => {
    garaz.style.display = "none";
    battleField.style.display = "block";
    
    

    
};
[...home].forEach((home) => {
    home.onclick = () =>{
        garaz.style.display = "block";
        battleField.style.display = "none";
        shop.style.display = "none";
        skiny.style.display = "none";
        defeateBoss.style.display = "none";
        
        
        lehkaBitva.style.display = "none";
       stredniBitva.style.display = "none";
       tezkabitva.style.display = "none";
    }
});


//backgrounds
upgrade.onclick = () => {
shop.style.display = "block";
garaz.style.display = "none";

}
skins.onclick = () => {
    skiny.style.display = "block";
    garaz.style.display = "none";

}
boss.onclick = () => {
    defeateBoss.style.display = "block";
    garaz.style.display = "none";

    
}

let interval;
    lehky.onclick = () => {
        battleField.style.display = "none";
        lehkaBitva.style.display = "block";
        
         zivoty.innerHTML = playerHP;
         zivoty2.innerHTML = 80;

        interval = setInterval(() => {
            zivoty.innerHTML -=5;
            
            
            if (zivoty.innerHTML <= 0) {
                
                
                clearInterval(interval);
                
                
               
                
            }
        
        }, 1500);
            
        
    };
    //konec backgrounds
    //lehka bitva
    utok.onclick = () => {
    naboj.style.display = "none";
    ohen.style.display = "none";
        }


utok.onmousedown = () => {
    naboj.style.display = "block";
    ohen.style.display = "block";
    

    if(zivoty.innerHTML <= 0){
        naboj.style.display = "none";
        ohen.style.display = "none";
         garaz.style.display = "block";
         lehkaBitva.style.display = "none";
         
        clearInterval(interval);
        
        
        }
    else{
        naboj.style.display = "block";
        ohen.style.display = "block";
    }
    
    if (zivoty2.innerHTML <= 0) {
        
        naboj.style.display = "block";
        ohen.style.display = "block";
        clearInterval(interval);
        
        
        [...coins].forEach((coin) => {
            coin.innerHTML = parseInt(coin.innerHTML) + 5;
               

            });
            lehkaBitva.style.display = "none";
            garaz.style.display = "block";
    } 
   if (zivoty.innerHTML > 0 && zivoty2.innerHTML > 0) {
     
        zivoty2.innerHTML -=playerAttack;

    };
    
};
//stredni bitva
attackStredni.onclick = () => {
    naboja.style.display = "none";
    ohena.style.display = "none";
        }

let intervala;
 stredni.onclick = () => {
    stredniBitva.style.display = "block";
    battleField.style.display = "none";

    zivotyStredni.innerHTML = playerHP;
    zivoty3.innerHTML = 350;

    interval = setInterval(() => {
        zivotyStredni.innerHTML -=40;
        
        
        if (zivotyStredni.innerHTML <= 0) {
            
            
            clearInterval(intervala);
            
            
           
            
        }
    
    }, 2500);
        
 }
 attackStredni.onmousedown = () => {
    naboja.style.display = "block";
    ohena.style.display = "block";
    

    if(zivotyStredni.innerHTML <= 0){
        naboja.style.display = "none";
        ohena.style.display = "none";
         garaz.style.display = "block";
         stredniBitva.style.display = "none";
         
        clearInterval(intervala);
        
        
        }
    else{
        naboja.style.display = "block";
        ohena.style.display = "block";
    }
    
    if (zivoty3.innerHTML <= 0) {
        
        naboja.style.display = "block";
        ohena.style.display = "block";
        clearInterval(intervala);
        
        
        [...coins].forEach((coin) => {
            coin.innerHTML = parseInt(coin.innerHTML) + 10;
               

            });
        stredniBitva.style.display = "none";
            garaz.style.display = "block";
    } 
   if (zivotyStredni.innerHTML > 0 && zivoty3.innerHTML > 0) {
     
        zivoty3.innerHTML -=playerAttack;

    };
    
};


//tezka bitva
attackTezky.onclick = () => {
    nabojb.style.display = "none";
    ohenb.style.display = "none";
        }
        
let intervalb;
tezky.onclick = () => {
    tezkabitva.style.display = "block";
    battleField.style.display = "none";

    zivotyTezky.innerHTML = playerHP;
    zivoty4.innerHTML = 1000;

    

    intervalb = setInterval(() => {
        zivotyTezky.innerHTML -=200;
        
        
        if (zivotyTezky.innerHTML <= 0) {
            
            
            clearInterval(intervalb);
            
            
           
            
        }
    
    }, 5000);
        
 }
 attackTezky.onmousedown = () => {
    nabojb.style.display = "block";
    ohenb.style.display = "block";
    

    if(zivotyTezky.innerHTML <= 0){
        nabojb.style.display = "none";
        ohenb.style.display = "none";
         garaz.style.display = "block";
         tezkabitva.style.display = "none";
         
        clearInterval(intervalb);
        
        
        }
    else{
        nabojb.style.display = "block";
        ohenb.style.display = "block";
    }
    
    if (zivoty4.innerHTML <= 0) {
        
        nabojb.style.display = "block";
        ohenb.style.display = "block";
        clearInterval(intervalb);
        
        
        [...coins].forEach((coin) => {
            coin.innerHTML = parseInt(coin.innerHTML) + 20;
               

            });
        tezkabitva.style.display = "none";
            garaz.style.display = "block";
    } 
   if (zivotyTezky.innerHTML > 0 && zivoty4.innerHTML > 0) {
     
        zivoty4.innerHTML -=playerAttack;

    };
    
}
//bos bitva
buttonAttackBoss.onclick = () => {
    nabojbos.style.display = "none";
    ohenbos.style.display = "none";
        }
let intervalc;

    tvojeZivotyBoss.innerHTML = playerHP;
    pocetzivotuboss.innerHTML = 5000;

    

    intervalc = setInterval(() => {
    tvojeZivotyBoss.innerHTML -=500;
        
        
        if (tvojeZivotyBoss.innerHTML <= 0) {
            
            
            clearInterval(intervalc);
            
            
           
            
        }
    
    }, 8000);
        
 
    buttonAttackBoss.onmousedown = () => {
    nabojbos.style.display = "block";
    ohenbos.style.display = "block";
    

    if(tvojeZivotyBoss.innerHTML <= 0){
        nabojbos.style.display = "none";
        ohenbos.style.display = "none";
         garaz.style.display = "block";
         defeatedBoss.style.display = "none";
         
        clearInterval(intervalc);
        
        
        }
    else{
        nabojbos.style.display = "block";
        ohenbos.style.display = "block";
    }
    
    if (pocetzivotuboss.innerHTML <= 0) {
        
        nabojbos.style.display = "block";
        ohenbos.style.display = "block";
        clearInterval(intervalc);
        
        
        [...coins].forEach((coin) => {
            coin.innerHTML = parseInt(coin.innerHTML) + 2000;
               

            });
            defeatedBoss.style.display = "none";
            garaz.style.display = "block";
    } 
   if (tvojeZivotyBoss.innerHTML > 0 && pocetzivotuboss.innerHTML > 0) {
     
        pocetzivotuboss.innerHTML -=playerAttack;

    };
    
}

//shop - upgrady HP + Attacku


UpgradeHpPet.onclick = () => {
    if(coins[0].innerHTML >= 5){
        [...coins].forEach((coin) => {
            coin.innerHTML = parseInt(coin.innerHTML) - 5;
               
    
            })
            playerHP +=5;
            [...pocetZivotu].forEach((zivotInfo) => {
                zivotInfo.innerHTML = playerHP;
            })
    }
    
    
    
}
upgradeHpDvacet.onclick = () => {
    if(coins[0].innerHTML >= 15){
        [...coins].forEach((coin) => {
            coin.innerHTML = parseInt(coin.innerHTML) - 15;
               
    
            })
            playerHP +=20;
            [...pocetZivotu].forEach((zivotInfo) => {
                zivotInfo.innerHTML = playerHP;
            })
    }
    
    
    
}
upgradeAttackJedna.onclick = () => {
    if(coins[0].innerHTML >= 5){
        [...coins].forEach((coin) => {
            coin.innerHTML = parseInt(coin.innerHTML) - 5;
               
    
            })
            playerAttack +=1;
            [...pocetAttacku].forEach((AttackInfo) => {
                AttackInfo.innerHTML = playerAttack;
            })
    }
    
    
    
}
upgradeAttackPet.onclick = () => {
    if(coins[0].innerHTML >= 20){
        [...coins].forEach((coin) => {
            coin.innerHTML = parseInt(coin.innerHTML) - 20;
               
    
            })
            playerAttack +=5;
            [...pocetAttacku].forEach((AttackInfo) => {
                AttackInfo.innerHTML = playerAttack;
            })
    }
    
    
    
}





































    