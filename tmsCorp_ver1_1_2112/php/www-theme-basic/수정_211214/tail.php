<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}
?>

    </div>
</div>

</div>
<!-- } 콘텐츠 끝 -->

<hr>

<!-- 하단 시작 { -->
<footer>
    <div class="footer_inner">
    <div class="footer_top">
        <a class="footer_logo" href=""><img src="/res/img/tms_logo_white.svg" /></a>
        <div class="wrap_footer_top">
        <div class="company_info">
            <p>대표이사 : 정태철</p>
            <p>전화 : 1833-8804</p>
            <p>사업자등록번호 : 353-88-01008</p>
            <p>E-mail : jsminrvd@gmail.com</p>
        </div>
        <div class="wrap_ft_shortcut">
            <div class="ft_shortcut">계열사 바로가기<img src="/res/img/tms_ic_plus_ft.png"></div>
            <div class="ft_shortcut_dropdown">
            <a href="https://tms-energy.co.kr/" target="_blank">TMS-신재생 에너지</a>
            <a onclick="yet()">ANSYS 솔루션</a>
            <a onclick="yet()">인테리어 플랫폼</a>
            </div>
        </div>
        </div>
    </div>
    <div class="footer_bottom">
        <p class="copyrt">Copyright TMSolutions Corp. All Rights Reserved.</p>
        <div class="wrap_sns">
        <a class="footer_sns-blog" href="https://blog.naver.com/tms-energy" target="_blank"></a>
        <a class="footer_sns-band" href="https://band.us/band/75760644" target="_blank"></a>
        </div>
    </div>
    </div>
</footer>
</body>
<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");