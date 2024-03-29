// 1. NAV BAR TOGGLE EVENT
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggle-button');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            contents.forEach(content => {
                content.style.display='none';
            });

            const contentId = this.id.replace('button', 'content');
            const contentToShow = document.getElementById(contentId);
            
            contentToShow.style.display='block';
            if (contentId === 'content2') {
                document.getElementById('content1').style.display='none';
              
            } else if (contentId === 'content1') {
               
            }
        });
    });
});