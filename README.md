# IC Scroll Tabs

IC Scroll Tabs is a lightweight, customizable jQuery plugin that provides scrollable tabs with smooth scrolling and selectable tab headers. It's designed to be visually appealing and functional, allowing for easy integration into any project.

## Features

- Horizontal or vertical tab layout
- Three selectable tab styles:
  - Default (background color changes when selected)
  - Bordered (border changes color when selected)
  - Lite/Highlighted (text color changes when selected)
- Smooth scroll to content section on header click
- Automatic active header selection when scrolling content
- Fully customizable colors via `data-color` attribute
- Supports dynamic resizing

## Installation

1. Include jQuery in your project:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

2. Include the CSS and JS files for IC Scroll Tabs:

```html
<link rel="stylesheet" href="ic-scroll-tabs.css">
<script src="ic-scroll-tabs.js"></script>
```

## Usage

HTML structure:

```html
<div class="scroll-tab">
    <div class="st-headers">
        <div class="st-header-main sel" data-color="blue">Default</div>
        <div class="st-header-main" data-color="red">Default</div>
        <div class="st-header-main bordered" data-color="green">Bordered</div>
        <div class="st-header-main lite" data-color="orange">Lite</div>
    </div>
    <div class="st-body">
        <div class="st-body-section">
            <div class="st-body-title">Section 1</div>
            Content for section 1
        </div>
        <div class="st-body-section">
            <div class="st-body-title">Section 2</div>
            Content for section 2
        </div>
    </div>
</div>
```

Initialize the plugin:

```html
<script>
    $('.scroll-tab').ic_scroll_tabs()
</script>
```

### Options

You can pass an options object when initializing:

```js
$('.scroll-tab').ic_scroll_tabs({
    scroll_offset: 30,          // Offset for detecting active tab (default 30px)
    animation_duration: 600     // Scroll animation duration in milliseconds
})
```

### Notes

- Colors are set via `data-color` on each tab header.
- You can add the class `st-column` to `.scroll-tab` for horizontal tab headers.
- The first tab automatically becomes active if none is selected.
- The plugin automatically handles resizing and adjusts tab widths accordingly.

## License

MIT License

