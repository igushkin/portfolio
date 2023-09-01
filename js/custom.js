function toggle(parentIdentifier) {

    let blocksIndetifier = parentIdentifier + ' ' + '.hidden-block';
    let arrowIdentifier = parentIdentifier + ' ' + '.pointer';

    console.log(arrowIdentifier);

    $(blocksIndetifier).each(function () {
        $(this).slideToggle();
    });

    $(arrowIdentifier).toggleClass('down-pointer up-pointer');
};