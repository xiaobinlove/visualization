module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    // 命名规范
    'selector-class-pattern': [
      '^[A-Z]+$',
      {
        message: 'Expected class selector to be kebab-case'
      }
    ]
  }
}
