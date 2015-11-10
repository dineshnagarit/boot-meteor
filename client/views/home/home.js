Template.home.helpers({
    'feature' : function () {

    }
});

Template.home.events({

    'click #menu-toggle': function(e){
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }
});

Template.home.rendered = function (){
};
