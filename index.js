const { randomInt } = require("crypto");
const Discord = require("discord.js");
const { get } = require("http");

const prefixe = "!";
const nom = "gentillesse.exe";

var tabEmoji = ['731207159110434927', '751521008787259472', '751516261325996204', '751515834035208303', '751514762290004028', '751526875796603050', '690918475895668806',
    '748613567867125972', '751527523573039215', '742687402266460194', '781257461507686430', '715530169745539082', '715530435215491183', '715530310548193360', '715530512122511430', '776217617924620318',
    '776215591174144000', '751526122344153099', '757652214545383464', '731154956375031909', '715530214821593178', '742689936779509811', '731155155185041519', '733426418389745735',
    '764791683706519562', '764434153339879474', '707923874427437097', '759117882129907772', '745385212313075924', '715530386070831165', '715530359994843207', '731155031495278634',
    '759120952033804299', '715530455130046544', '781820406377742346', '715530191782543430', '733426829070958663', '733426398903140444', '715530099587416145', '733425946786267138',
    '788865157166137354', '776226836111163394', '780135266852667442', '715530285097418773', '715530410410508288', '776765816783110145', '759113713289658458'];
const tailleEmoji = tabEmoji.length;
random = getRandomInt(tailleEmoji);
emoji = "😅";

var tabBlague = ['C \'est un sucre qui rentre dans un café et plouf !', 'Dans la phrase «le voleur a volé une télévision», où est le sujet? \n ||En prison ! *badum tssss* ||',
    'Un policier arrête un automobiliste. \n -Vous n\'aviez pas vu le feu rouge? \n -Oui, c\'est vous que je n’avais pas vu...', '– J\'aimerais qu\'il y ait quelque chose entre nous…  \n –Quoi?  \n -Un mur.',
    'C\'est l\'histoire du ptit dej, tu la connais ? \n -Non. \n Pas de bol...', 'Pourquoi les Belges viennent-ils à la messe avec du savon ? \n ||Pour l’Ave Maria. (aucun rapport avec les belges :man_shrugging: )||',
    'C\'est quoi une chauve souris avec une perruque :bat: ? \n ||Une souris.||', 'C\'est quoi un petit pois avec une épée face à une carotte avec une épée ? \n ||Un bon duel.||',
    'Hey, tu connais l’histoire du nombril ? \n – Non. \n – Bril 788865157166137354'];
const tailleBlague = tabBlague.length;
blague = 'KONO DIO DA';

const Client = new Discord.Client;

Client.on("ready", () => {
    console.log("bot oppérationnel");
});

Client.on("message", message => {



    switch (message.content) {

        case (prefixe + "drole"):
            random = getRandomInt(tailleBlague);
            blague = tabBlague[random];
            message.channel.send(blague);
            break;

        case (prefixe + nom):
            message.channel.send("**Bonjour !** *(ou bonsoir...)* \n Je m'appelle **" + nom + "** ! \n Je suis dans l'unique but d'être gentil et de partager de la bonne humeur dans ce monde cruel :blush: \n Si vous le souhaitez, vous pouvez invoquer une blague en utilisant `!drole`. \n Je ne garantis pas le fou rire car mon créateur n'est pas très fort dans ce domaine mais je vais faire de mon mieux pour réhausser le niveau :clown:");
            break;

        default:
            random = getRandomInt(tailleEmoji);
            emoji = tabEmoji[random];
            message.react(emoji);
            break;

    }

});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

Client.login(process.env.TOKEN);

