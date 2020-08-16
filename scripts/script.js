/* Voici la fonction javascript qui change la propriété "display"
pour afficher ou non le div selon que ce soit "none" ou "block". */


id1 = 'divacacher1';
id2 = 'divacacher2';
id3 = 'divacacher3';
id4 = 'divacacher4';
id5 = 'divacacher5';
id6 = 'divacacher6';
id7 = 'divacacher7';
id8 = 'divacacher8';
id9 = 'divacacher9';
id10 = 'divacacher10';
id11 = 'divacacher11';
id12 = 'divacacher12';
id13 = 'divacacher13';
id14 = 'divacacher14';
id15 = 'divacacher15';
id16 = 'divacacher16';
id17 = 'divacacher17';
id18 = 'divacacher18';
id19 = 'divacacher19';
id20 = 'divacacher20';
id21 = 'divacacher21';
id22 = 'divacacher22';
id23 = 'divacacher23';
id24 = 'divacacher24';


function AfficherMasquer(idObjet, idDivImg)
{
    var divInfo = document.getElementById(idObjet);
    var inputChevron = document.getElementById(idDivImg);
    var nbLi =divInfo.getElementsByTagName("LI").length;
    if (getComputedStyle(divInfo).maxHeight == '0px')
    {
        var nbPixels = 50*nbLi+'px';
        if (nbLi>=4)
        {
            var tpsTransition = "max-height " +0.2*nbLi+"s";
        }
        else
        {
            var tpsTransition = "max-height " +0.3*nbLi+"s";
        }
        divInfo.style.setProperty('max-height', nbPixels);
        divInfo.style.setProperty('transition', tpsTransition);
        inputChevron.setAttribute('src',  "../chevronUp.png");
    }
    else
    {
        divInfo.style.setProperty('max-height', "0px");
        inputChevron.setAttribute('src',  "../chevronDown.png");
    }
}
