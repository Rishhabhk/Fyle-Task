$(document).ready(function() {
    const projectContents = $('.project-content');
    const mainImage = $('#main-image');
    const imageSources = [
        'assets/custom-image-1.jpg',
        'assets/image@2x.png',
        'assets/custom-image-2.jpg'
    ];

    projectContents.each(function(index) {
        $(this).on('click', function() {
            projectContents.removeClass('selected-content');
            $(this).addClass('selected-content');
            mainImage.attr('src', imageSources[index]);
        });
    });

    $('#contactBtn').on('click', function() {
        $('#formDiv').addClass('show');
        $('body').addClass('no-scroll');
    });

    $('#formDiv').on('click', function(event) {
        if (event.target === this) {
            $(this).removeClass('show');
            $('body').removeClass('no-scroll');
        }
    });

    $('#checkbox').on('change', function() {
        $('#submitBtn').prop('disabled', !$(this).prop('checked'));
    });

    const sliderButtons = $('.slider-btns button');
    const imageSlider = $('.image-slider');
    const cards = $('.service-card');
    const cardWidth = cards.eq(0).outerWidth();
    const sliderWidth = imageSlider[0].scrollWidth;
    const containerWidth = imageSlider.outerWidth();
    const scrollStep = cardWidth;
    let currentIndex = 0;

    function slideToNext() {
        currentIndex = (currentIndex + 1) % sliderButtons.length;
        let scrollPosition = scrollStep * currentIndex;
        
        if (currentIndex === sliderButtons.length - 1) {
            scrollPosition = sliderWidth - containerWidth;
        }

        imageSlider.scrollLeft(scrollPosition);

        sliderButtons.each(function(index) {
            const img = $(this).find('img');
            if (index === currentIndex) {
                img.attr('src', 'assets/1.svg');
            } else {
                img.attr('src', 'assets/2.svg');
            }
        });
    }

    function buttonClickHandler(index) {
        return function() {
            currentIndex = index;
            let scrollPosition = scrollStep * index;
            
            if (index === sliderButtons.length - 1) {
                scrollPosition = sliderWidth - containerWidth;
            }

            imageSlider.scrollLeft(scrollPosition);

            sliderButtons.each(function(idx) {
                const img = $(this).find('img');
                if (idx === index) {
                    img.attr('src', 'assets/1.svg');
                } else {
                    img.attr('src', 'assets/2.svg');
                }
            });
        };
    }

    sliderButtons.each(function(index) {
        $(this).on('click', buttonClickHandler(index));
    });

    setInterval(slideToNext, 3000);
});
