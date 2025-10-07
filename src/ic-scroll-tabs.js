(function($){
    $.fn.ic_scroll_tabs = function(options){
        var settings = $.extend({
            scroll_offset: 30,
            animation_duration: 600
        }, options)
        var st = '.scroll-tab'
        var body_sel = '.st-body'
        var section_sel = '.st-body-section'
        var headers_sel = '.st-headers'
        var main_header_sel = '.st-header-main'
        var $roots = this

        function init_tabs($el){
            var $root = $($el)
            var is_column = $root.hasClass('st-column')
            var $m_headers = $root.find(main_header_sel)
            var curr_width = 0
            $m_headers.removeAttr('style')
            $m_headers.each(function(){
                var $h = $(this)
                var used_color = $h.data('color') || $root.data('color') || '#3498db'
                if(!curr_width) curr_width = this.clientWidth + 5
                var css = is_column ? {'--main-color': used_color} : {'width': curr_width + 'px', '--main-color': used_color}
                $h.css(css)
            })
            if(!$m_headers.filter('.sel').length) $m_headers.first().addClass('sel')
        }

        function on_body_scroll(){
            var $body = $(this)
            var $root = $body.closest(st)
            var $sections = $body.find(section_sel)
            if(!$sections.length) return this
            var scroll_top = $body.scrollTop()
            var first_offset = $sections.first()[0].offsetTop
            var found_index = 0
            $sections.each(function(i){
                var offset = this.offsetTop - first_offset
                if(offset <= scroll_top + settings.scroll_offset) found_index = i
            })
            var $current_header = $root.find(main_header_sel).eq(found_index)
            if(!$current_header.hasClass('sel')){
                $root.find(main_header_sel + '.sel').removeClass('sel')
                $current_header.addClass('sel')
            }
            return this
        }

        function on_header_click(){
            var $header = $(this)
            if($header.hasClass('sel')) return this
            var $root = $header.closest(st)
            var $body = $root.find(body_sel)
            var index = $header.index()
            var $first = $body.find(section_sel).first()
            var $target = $body.find(section_sel).eq(index)
            if(!$target.length) return this
            var target_pos = $target[0].offsetTop - $first[0].offsetTop
            $body.stop(true).animate({scrollTop: target_pos}, settings.animation_duration)
            return this
        }

        $roots.each(function(){
            var $root = $(this)
            init_tabs($root)
            $root.find(body_sel).off('scroll.ic_scroll_tabs').on('scroll.ic_scroll_tabs', on_body_scroll)
            $root.off('click.ic_scroll_tabs', main_header_sel).on('click.ic_scroll_tabs', main_header_sel, on_header_click)
        })

        var resize_timer = null
        $(window).off('resize.ic_scroll_tabs').on('resize.ic_scroll_tabs', function(){
            clearTimeout(resize_timer)
            resize_timer = setTimeout(function(){
                $roots.each(function(){ init_tabs($(this)) })
            }, 120)
        })

        return this
    }
})(jQuery)