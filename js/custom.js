/*============================
   js index
==============================

==========================================*/
const LANG_VI = 'vi';
const LANG_JP = 'ja';
let matrix = [
    {id: 'ml-title', data: ['Thế Phúc - Thị Như Wedding','フックとサラの結婚式']},
    {id: 'ml-name-husband', data: ['Phúc','フック']},
    {id: 'ml-wife-name', data: ['Như','サラ']},
    {id: 'ml-menu-about-us', data: ['Về Chúng mình','私たちについて']},
    {id: 'ml-menu-address', data: ['Địa Điểm tổ Chức','開催場所']},
    {id: 'ml-menu-photos', data: ['Ảnh Tụi Mình','私たちの写真']},
    {id: 'ml-menu-contact', data: ['Tham gia','参加']},
    {id: 'ml-wating-for', data: ['Chúng mình chờ đợi.....','楽しみしています。。。']},
    {id: 'ml-wedding-text', data: ['Ngày Cưới','結婚日']},
    {id: 'ml-about-us', data: ['Về Chúng mình','私たちについて']},
    {id: 'ml-wife-fullname', data: ['Trần Thị Như','チャン・テイ・ニュー']},
    {id: 'ml-wife-description', data: ['Sư tử của mình. Mọi người thường gọi là Sara<br>Thích đọc sách, thích ăn ngon cùng với người thân yêu.<br>Và là một cô gái tốt bụng','']},
    {id: 'ml-husb-fullname', data: ['Phạm Thế Phúc','ファム・テー・フック']},
    {id: 'ml-husb-description', data: ['Điềm đạm, ít nói!<br>Thích nơi yên tĩnh nhưng không thích một mình.<br>Khả năng đặc biệt là tích trữ nhiều năng lượng tích cực.','']},
    {id: 'ml-address', data: ['Địa Điểm tổ Chức','開催場所']},
    {id: 'ml-wedding-wife', data: ['Hôn Lễ Nhà Gái','HLNG(JP)']},
    {id: 'ml-wife-house', data: ['Tư Gia Nữ','Tư Gia Nữ(JP)']},
    {id: 'ml-wife-address', data: ['Thôn Nhơn Hoà, Xã Bình Tân, Huyện Bình Sơn, Quảng Ngải','Thôn Nhơn Hoà, Xã Bình Tân, Huyện Bình Sơn, Quảng Ngải(JP)']},
    {id: 'ml-wife-wedding-time', data: ['10:30 - Thứ Hai, Ngày 22 Tháng 5 năm 2023','10:30 - Thứ Hai, Ngày 22 Tháng 5 năm 2023(JP)']},
    {id: 'ml-navigation-wife', data: ['Dẫn đường','Dẫn đường(JP)']},
    {id: 'ml-wedding-husb', data: ['Hôn Lễ Nhà Trai','Hôn Lễ Nhà Trai(JP)']},
    {id: 'ml-husb-house', data: ['Tư gia nam','Tư gia nam(JP)']},
    {id: 'ml-husb-address', data: ['Thôn Long Thạnh Đông, Xã Tam Hải, Núi Thành, Quảng Nam','Thôn Long Thạnh Đông, Xã Tam Hải, Núi Thành, Quảng Nam(JP)']},
    {id: 'ml-husb-wedding-time', data: ['11:00 - Thứ Hai, Ngày 22 Tháng 5 năm 2022','11:00 - Thứ Hai, Ngày 22 Tháng 5 năm 2022(JP)']},
    {id: 'ml-navigation-husb', data: ['Dẫn đường','Dẫn đường(JP)']},
    {id: 'ml-wedding-danang', data: ['Tiệc cưới ngoài trời Đà Nẵng','Tiệc cưới ngoài trời Đà Nẵng(JP)']},
    {id: 'ml-danang', data: ['Nhà hàng công viên cá voi','Nhà hàng công viên cá voi(JP)']},
    {id: 'ml-danang-address', data: ['Võ Nguyên Giáp, Mân Thái, Sơn Trà, Đà Nẵng','Võ Nguyên Giáp, Mân Thái, Sơn Trà, Đà Nẵng(JP)']},
    {id: 'ml-danang-time', data: ['17:30 - Thứ Bảy, Ngày 27 Tháng 5 năm 2023','17:30 - Thứ Bảy, Ngày 27 Tháng 5 năm 2023(JP)']},
    {id: 'ml-navigation-danang', data: ['Dẫn đường','Dẫn đường(JP)']},
    {id: 'ml-photos', data: ['Ảnh Tụi Mình','私たちの写真']},
    {id: 'ml-will-join', data: ['Bạn tham gia cùng tụi mình chứ?','Bạn tham gia cùng tụi mình chứ?(JP)']},
    {id: 'ml-give-me-info', data: ['Vui lòng để lại thông tin của bạn trước ngày 22-05-2023.','Vui lòng để lại thông tin của bạn trước ngày 22-05-2023(JP)']},
    {id: 'ml-will-you-join', data: ['Bạn sẽ tham gia tiệc*','Bạn sẽ tham gia tiệc*(JP)']},
    {id: 'ml-can-not-join', data: ['Không tham gia được','Không tham gia được(JP)']},
    {id: 'ml-pl-name', data: ['Họ và tên của bạn*','Họ và tên của bạn*(JP)']},
    {id: 'ml-pl-notes', data: ['Lời nhắn gửi của bạn','Lời nhắn gửi của bạn(JP)']},
    {id: 'ml-1', data: ['Đi 1 mình','Đi 1 mình(JP)']},
    {id: 'ml-2', data: ['Đi cùng (1 người)','Đi cùng (1 người)(JP)']},
    {id: 'ml-3', data: ['Đi cùng (2 người)','Đi cùng (2 người)(JP)']},
    {id: 'ml-4', data: ['Đi cùng (3 người)','Đi cùng (3 người)(JP)']},
    {id: 'ml-5', data: ['Đi cùng (4 người)','Đi cùng (4 người)(JP)']},
    {id: 'submit', data: ['Gửi thông tin','Gửi thông tin(JP)']},
    {id: 'ml-success', data: ['Cảm ơn bạn vì đã tham gia cùng tụi mình!','Cảm ơn bạn vì đã tham gia cùng tụi mình!(JP)']},
    {id: 'ml-error', data: ['Đang có lỗi trong quá trình xử lý. Xin thử lại.','Đang có lỗi trong quá trình xử lý. Xin thử lại.(JP)']},
    {id: 'ml-thankyou', data: ['Thank You','Thank You(JP)']},
    {id: 'ml-for-being', data: ['Thank You','For Being With Us(JP)']},
];

function swichLanguage()
{
    const localStorage = window.localStorage;
    let currentLanguage = localStorage.getItem('lang');

    if (currentLanguage == null)
    {
        currentLanguage = LANG_VI;
    }

    let changeLanguage = "";
    if (currentLanguage == LANG_VI)
    {
        changeLanguage = LANG_JP;
    }
    else
    {
        changeLanguage = LANG_VI;
    }

    updateLanguage(changeLanguage);
    localStorage.setItem('lang', changeLanguage);
}


function scrollToTop()
{
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initLanguage()
{
    const localStorage = window.localStorage;
    let currentLanguage = localStorage.getItem('lang');

    if (currentLanguage == null)
    {
        currentLanguage = LANG_VI;
    }

    updateLanguage(currentLanguage);
}

function updateLanguage(lang) {
    var index = 0;

    if (lang == LANG_VI)
    {
        index = 0;
        $('[id^="ml-"]').each(function() {
            $(this).removeClass('font-japanese');
          });
    }
    else
    {
        index = 1;
        $('[id^="ml-"]').each(function() {
            $(this).addClass('font-japanese');
          });
    }

    matrix.forEach(item => {
        const value = item.data[index];
        if (item.id.startsWith('ml-pl'))
        {
            const element = $('#' + item.id);
            element.attr('placeholder', value);
        }
        else
        {
            const element = $('#' + item.id);
            element.html(value);
        }
    });

    
}

(function($) {
    var audio = new Audio('https://raw.githubusercontent.com/phamthephuc-techvify/wedding_invitation/main/wedding-Phuc-Nhu/music/i-do.mp3');
    var isFirst = true;
    

    window.onclick = function (e) {
        if (isFirst) {
            playAudio(true);
            isFirst = false;
        }
    }

    $(window).on('load', function() {
        hidePreloading();
    });

    /*================================
    Preloader
    ==================================*/
    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function hidePreloading() {
        if($('.pre-loading').length) {
            $('.pre-loading').delay(100).fadeOut(500, function() {
            });
        }
    }

    $('form').submit(function(e) {
        e.preventDefault();
    });
   
    if ($("#rsvp-form").length) {
        
        const localStorage = window.localStorage;
        const currentLanguage = localStorage.getItem('lang') || LANG_VI;
        var index = 0;
        let translations = {
            'ml-name-error': ['Bạn chưa nhập họ và tên.','名前を入力してください。'],
            'ml-quest-error': ['Bạn chưa chọn số lượng tham gia cùng.','一緒に参加する人数を選択してください。'],
        }
        
        $("#rsvp-form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    minlength: 8
                },

                guest: {
                    required: true
                },

                events: {
                    required: true
                }


            },
            
            
            messages: {
                name: translations['ml-name-error'][index],
                guest: translations['ml-quest-error'][index],
            },

            submitHandler: function (form) {
                console.log('submitHandler 4');
                if ($("#process-loading").css("display") === "inline-block") return 0;
                var params = $(form).serialize();
                
                $("#process-loading").css("display", "inline-block");
                $.ajax({
                    type: "GET",
                    url: "https://script.google.com/macros/s/AKfycbziPSWd6KxUahVDRmRJoPTN_mlUzh4_lMZLqy80XL-GrNlKltP6EYTDeujD898iRbY/exec",
                    data: params,
                    success: function () {
                        $( "#loading").hide();
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 5000);
                        form.reset();
                    },
                    error: function(e) {
                        /*$( "#loading").hide();
                        $( "#ml-error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#ml-error").slideUp( "slow" );
                        }, 5000);
                        */
                        $( "#process-loading").hide();
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 5000);
                        form.reset();
                    }
                });
                return false; // required to block normal submit since you used ajax
                
            }

        });
    }

    

    /*------------------------------------------
        = TOGGLE MUSUC BIX
    -------------------------------------------*/
    if($(".music-box").length) {
        var musicBtn = $(".music-box-toggle-btn");

        musicBtn.on("click", function() {
            playAudio();
            return false;
        })
    }

    function playAudio(play) {
        if (audio.paused) {
            audio.loop = true;
            audio.play();
            $('#music-icon').removeClass('fa-music');
            $('#music-icon').addClass('fa-volume-xmark');
        } else if (!play) {
            audio.pause();
            $('#music-icon').removeClass('fa-volume-xmark');
            $('#music-icon').addClass('fa-music');
        }
    }

    // initLanguage();

}(jQuery));