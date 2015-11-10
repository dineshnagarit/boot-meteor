Template.home.helpers({
    'feature' : function () {

    }
});

Template.home.events({
   /* $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });*/
    'click #menu-toggle': function(e){
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }
});

Template.home.rendered = function (){
};
