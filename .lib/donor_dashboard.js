function donorStatus() {
    let donorStatusLink = document.getElementById("donor_status_link")
    let leaderboardLink = document.getElementById("donor_leaderboard")
    let aboutMidasLink = document.getElementById("about_midas")
    let midasMembersLink = document.getElementById("midas_members")
    donorStatusLink.className = "nav-link active"
    leaderboardLink.className = "nav-link"
    aboutMidasLink.className = "nav-link"
    midasMembersLink.className = "nav-link"

    var donorStatusPage = document.getElementById("donor-status")
    var leaderboardPage = document.getElementById("leaderboard")
    var aboutMidasPage = document.getElementById("about-midas")
    var midasMembersPage = document.getElementById("midas-members")
    donorStatusPage.style.display = ""
    leaderboardPage.style.display = "none"
    aboutMidasPage.style.display = "none"
    midasMembersPage.style.display = "none"



}

function leaderboard() {
    let donorStatusLink = document.getElementById("donor_status_link")
    let leaderboardLink = document.getElementById("donor_leaderboard")
    let aboutMidasLink = document.getElementById("about_midas")
    let midasMembersLink = document.getElementById("midas_members")
    donorStatusLink.className = "nav-link"
    leaderboardLink.className = "nav-link active"
    aboutMidasLink.className = "nav-link"
    midasMembersLink.className = "nav-link"

    var donorStatusPage = document.getElementById("donor-status")
    var leaderboardPage = document.getElementById("leaderboard")
    var aboutMidasPage = document.getElementById("about-midas")
    var midasMembersPage = document.getElementById("midas-members")
    donorStatusPage.style.display = "none"
    leaderboardPage.style.display = ""
    aboutMidasPage.style.display = "none"
    midasMembersPage.style.display = "none"

    $( document ).ready(function() {

        // GET REQUEST
        $("#donor_leaderboard").click(function(event){
            event.preventDefault();
            ajaxGet();
        });

        // DO GET
        function ajaxGet(){
            $.ajax({
                type : "GET",
                url : "/users",
                success: function(result){
                    $('#getResultDiv ul').empty();
                    $.each(result, function(i, user){
                        $('#getResultDiv .list-group').append(user.firstName + " " + user.lastName + "<br>")
                    });
                    console.log("Success: ", result);
                },
                error : function(e) {
                    $("#getResultDiv").html("<strong>Error</strong>");
                    console.log("ERROR: ", e);
                }
            });
        }
    })
}

function aboutMidas() {
    let donorStatusLink = document.getElementById("donor_status_link")
    let leaderboardLink = document.getElementById("donor_leaderboard")
    let aboutMidasLink = document.getElementById("about_midas")
    let midasMembersLink = document.getElementById("midas_members")
    donorStatusLink.className = "nav-link"
    leaderboardLink.className = "nav-link"
    aboutMidasLink.className = "nav-link active"
    midasMembersLink.className = "nav-link"

    var donorStatusPage = document.getElementById("donor-status")
    var leaderboardPage = document.getElementById("leaderboard")
    var aboutMidasPage = document.getElementById("about-midas")
    var midasMembersPage = document.getElementById("midas-members")
    donorStatusPage.style.display = "none"
    leaderboardPage.style.display = "none"
    aboutMidasPage.style.display = ""
    midasMembersPage.style.display = "none"
}

function midasMembers() {
    let donorStatusLink = document.getElementById("donor_status_link")
    let leaderboardLink = document.getElementById("donor_leaderboard")
    let aboutMidasLink = document.getElementById("about_midas")
    let midasMembersLink = document.getElementById("midas_members")

    donorStatusLink.className = "nav-link"
    leaderboardLink.className = "nav-link"
    aboutMidasLink.className = "nav-link"
    midasMembersLink.className = "nav-link active"

    var donorStatusPage = document.getElementById("donor-status")
    var leaderboardPage = document.getElementById("leaderboard")
    var aboutMidasPage = document.getElementById("about-midas")
    var midasMembersPage = document.getElementById("midas-members")
    donorStatusPage.style.display = "none"
    leaderboardPage.style.display = "none"
    aboutMidasPage.style.display = "none"
    midasMembersPage.style.display = ""
}