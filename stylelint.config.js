module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    'scss/selector-no-redundant-nesting-selector': true,
    'no-descending-specificity': null,
    'function-url-quotes': 'always', // 地址一定要写引号
    'number-leading-zero': 'always', // 要求或分数低于1的数字前导零
    'number-no-trailing-zeros': true, // 禁止在数量尾随零
    'string-quotes': 'single', // 指定字串，單引号
    'length-zero-no-unit': true, // 禁止单位零长度。
    'value-keyword-case': 'lower', // 指定小写关键字的值
    'value-list-comma-newline-after': 'always-multi-line', // 在值列表的逗号后指定一个换行符或禁止留有空格
    'selector-list-comma-newline-after': 'always-multi-line', // 在值列表的逗号后指定一个换行符或禁止留有空格
    'shorthand-property-no-redundant-values': true, // 不允许在简写属性冗余值
    // "property-case": "lower", // 为属性指定小写(stylelint-config-standard)
    'keyframe-declaration-no-important': true, // 不允许!important在关键帧声明
    // "block-closing-brace-empty-line-before": "never", // 不允许关闭括号前空一行(stylelint-config-standard)
    // "block-closing-brace-newline-after": "always", // 需要一个换行符关闭括号后的空白(stylelint-config-standard)
    // "block-opening-brace-newline-after": "always-multi-line", // 开括号的块之后需要新的一行(stylelint-config-standard)
    'selector-class-pattern': '^[a-z]+([a-z0-9]?|[a-z0-9\\-\\_]*[a-z0-9])$', // 指定一个模式类选择符，限制选择器名称写法
    'no-empty-source': null, // 不允许空的来源
    'at-rule-no-unknown': null, // 不允许at-rules不明
    // 'indentation': 2, // 指定缩进(stylelint-config-standard)
    'max-nesting-depth': 6, // 允许嵌套的深度为5
    'no-duplicate-selectors': true, // 不允许重复的选择器
    // "no-eol-whitespace": true, // 不允许行尾空白(stylelint-config-standard)
    // 'no-invalid-double-slash-comments': true, // 不允许双斜杠注释(/ /…)不支持CSS(stylelint-config-standard)
    'order/order': [ // 指定声明块内的内容顺序
      ['custom-properties', 'declarations'], {
        disableFix: true,
      },
    ],
    /**
     * CSS 属性顺序
     * 1. 控制外部属性
     * 2. 盒模型
     * 3. 视觉
     * 4. 其他
     * 5. 未定义
     */
    'order/properties-order': [
      [
        // 指令
        'composes',
        '@import',
        '@extend',
        '@mixin',
        '@at-root',
        // 定位相关
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        // 盒模型相关
        'display',
        'flex',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-grow',
        'flex-shrink',
        'flex-wrap',
        'grid',
        'grid-area',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-gap',
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'grid-row-gap',
        'grid-column',
        'grid-column-start',
        'grid-column-end',
        'grid-column-gap',
        'grid-template',
        'grid-template-areas',
        'grid-template-rows',
        'grid-template-columns',
        'gap',
        'align-content',
        'align-items',
        'align-self',
        'justify-content',
        'justify-items',
        'justify-self',
        'order',
        'float',
        'clear',
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        // 边框
        'border',
        'border-color',
        'border-style',
        'border-width',
        'border-top',
        'border-top-color',
        'border-top-width',
        'border-top-style',
        'border-right',
        'border-right-color',
        'border-right-width',
        'border-right-style',
        'border-bottom',
        'border-bottom-color',
        'border-bottom-width',
        'border-bottom-style',
        'border-left',
        'border-left-color',
        'border-left-width',
        'border-left-style',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
        'border-collapse',
        'border-spacing',
        // 溢出
        'object-fit',
        'object-position',
        'overflow',
        'overflow-x',
        'overflow-y',
        // 版式
        'color',
        'font',
        'font-weight',
        'font-size',
        'font-family',
        'font-style',
        'font-variant',
        'font-size-adjust',
        'font-stretch',
        'font-effect',
        'font-emphasize',
        'font-emphasize-position',
        'font-emphasize-style',
        'font-smooth',
        'line-height',
        'direction',
        'letter-spacing',
        'white-space',
        'text-align',
        'text-align-last',
        'text-transform',
        'text-decoration',
        'text-emphasis',
        'text-emphasis-color',
        'text-emphasis-style',
        'text-emphasis-position',
        'text-indent',
        'text-justify',
        'text-outline',
        'text-wrap',
        'text-overflow',
        'text-overflow-ellipsis',
        'text-overflow-mode',
        'text-orientation',
        'text-shadow',
        'vertical-align',
        'word-wrap',
        'word-break',
        'word-spacing',
        'overflow-wrap',
        'tab-size',
        'hyphens',
        'unicode-bidi',
        'columns',
        'column-count',
        'column-fill',
        'column-gap',
        'column-rule',
        'column-rule-color',
        'column-rule-style',
        'column-rule-width',
        'column-span',
        'column-width',
        'page-break-after',
        'page-break-before',
        'page-break-inside',
        'src',
        // 视觉
        'list-style',
        'list-style-position',
        'list-style-type',
        'list-style-image',
        'table-layout',
        'empty-cells',
        'caption-side',
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-size',
        'background-clip',
        'background-origin',
        'background-attachment',
        'background-blend-mode',
        // 动画
        'transition',
        'transition-delay',
        'transition-timing-function',
        'transition-duration',
        'transition-property',
        'animation',
        'animation-name',
        'animation-duration',
        'animation-play-state',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode',
        // 其他
        'appearance',
        'content',
        'clip',
        'clip-path',
        'counter-reset',
        'counter-increment',
        'resize',
        'user-select',
        'nav-index',
        'nav-up',
        'nav-right',
        'nav-down',
        'nav-left',
        'pointer-events',
        'quotes',
        'touch-action',
        'will-change',
        'zoom',
        'fill',
        'fill-rule',
        'clip-rule',
        'stroke',
      ],
      {
        unspecified: 'bottom',
      },
    ],
  },
};