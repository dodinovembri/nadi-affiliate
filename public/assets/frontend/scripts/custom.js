setTimeout(function() {
    var _0x399bx1 = document['getElementById']('preloader');
    if (_0x399bx1) {
        _0x399bx1['classList']['add']('preloader-hide')
    }
}, 150);
document['addEventListener']('DOMContentLoaded', () => {
    'use strict';
    var _0x399bx4 = 'Sticky';
    var _0x399bx6 = false;

    function _0x399bx9() {
        var _0x399bxd = document['getElementsByClassName']('menu-hider');
        if (!_0x399bxd['length']) {
            document['body']['innerHTML'] += '<div class=\"menu-hider\"></div>'
        };
        document['querySelectorAll']('.menu')['forEach']((_0x399bxc) => {
            _0x399bxc['style']['display'] = 'block'
        });
        const _0x399bx28 = document['querySelectorAll']('a[href=\"#\"]');
        _0x399bx28['forEach']((_0x399bxc) => {
            return _0x399bxc['addEventListener']('click', (_0x399bxb) => {
                _0x399bxb['preventDefault']();
                return false
            })
        });

        function _0x399bx3f() {
            let _0x399bx40, _0x399bx41;
            if (/iP(hone|od|ad)/ ['test'](navigator['platform'])) {
                _0x399bx41 = (navigator['appVersion'])['match'](/OS (\d+)_(\d+)_?(\d+)?/);
                _0x399bx40 = {
                    status: true,
                    version: parseInt(_0x399bx41[1], 10),
                    info: parseInt(_0x399bx41[1], 10) + '.' + parseInt(_0x399bx41[2], 10) + '.' + parseInt(_0x399bx41[3] || 0, 10)
                }
            } else {
                _0x399bx40 = {
                    status: false,
                    version: false,
                    info: ''
                }
            };
            return _0x399bx40
        }
        let _0x399bx42 = _0x399bx3f();
        if (_0x399bx42['version'] > 14) {
            document['querySelectorAll']('#page')[0]['classList']['add']('min-ios15')
        };
        const _0x399bx43 = document['getElementsByClassName']('card');

        function _0x399bx44() {
            var _0x399bx45, _0x399bx46, _0x399bx47;
            var _0x399bx47 = document['querySelectorAll']('.header:not(.header-transparent)')[0];
            var _0x399bx48 = document['querySelectorAll']('#footer-bar')[0];
            _0x399bx47 ? _0x399bx45 = document['querySelectorAll']('.header')[0]['offsetHeight'] : _0x399bx45 = 0;
            _0x399bx48 ? _0x399bx46 = document['querySelectorAll']('#footer-bar')[0]['offsetHeight'] : _0x399bx46 = 0;
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx43['length']; _0x399bxa++) {
                if (_0x399bx43[_0x399bxa]['getAttribute']('data-card-height') === 'cover') {
                    if (window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x399bx49 = window['outerHeight']
                    };
                    if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x399bx49 = window['innerHeight']
                    };
                    var _0x399bx4a = _0x399bx49 + 'px'
                };
                if (_0x399bx43[_0x399bxa]['hasAttribute']('data-card-height')) {
                    var _0x399bx4b = _0x399bx43[_0x399bxa]['getAttribute']('data-card-height');
                    _0x399bx43[_0x399bxa]['style']['height'] = _0x399bx4b + 'px';
                    if (_0x399bx4b === 'cover') {
                        var _0x399bx4c = _0x399bx4b;
                        _0x399bx43[_0x399bxa]['style']['height'] = _0x399bx4a
                    }
                }
            }
        }
        if (_0x399bx43['length']) {
            _0x399bx44();
            window['addEventListener']('resize', _0x399bx44)
        };
        var _0x399bx4d = document['querySelectorAll']('[data-change-highlight]');
        _0x399bx4d['forEach']((_0x399bxc) => {
            return _0x399bxc['addEventListener']('click', (_0x399bxb) => {
                var _0x399bx4e = _0x399bxc['getAttribute']('data-change-highlight');
                var _0x399bx4f = document['querySelectorAll']('.page-highlight');
                if (_0x399bx4f['length']) {
                    _0x399bx4f['forEach'](function(_0x399bxb) {
                        _0x399bxb['remove']()
                    })
                };
                var _0x399bx50 = document['createElement']('link');
                _0x399bx50['rel'] = 'stylesheet';
                _0x399bx50['className'] = 'page-highlight';
                _0x399bx50['type'] = 'text/css';
                _0x399bx50['href'] = 'styles/highlights/highlight_' + _0x399bx4e + '.css';
                document['getElementsByTagName']('head')[0]['appendChild'](_0x399bx50);
                document['body']['setAttribute']('data-highlight', 'highlight-' + _0x399bx4e);
                localStorage['setItem'](_0x399bx4 + '-Highlight', _0x399bx4e)
            })
        });
        var _0x399bx51 = localStorage['getItem'](_0x399bx4 + '-Highlight');
        if (_0x399bx51) {
            document['body']['setAttribute']('data-highlight', _0x399bx51);
            var _0x399bx50 = document['createElement']('link');
            _0x399bx50['rel'] = 'stylesheet';
            _0x399bx50['className'] = 'page-highlight';
            _0x399bx50['type'] = 'text/css';
            _0x399bx50['href'] = 'styles/highlights/highlight_' + _0x399bx51 + '.css';
        } else {
            var _0x399bx52 = document['body']['getAttribute']('data-highlight');
            var _0x399bx53 = _0x399bx52['split']('highlight-');
            document['body']['setAttribute']('data-highlight', _0x399bx53[1]);
            var _0x399bx50 = document['createElement']('link');
            _0x399bx50['rel'] = 'stylesheet';
            _0x399bx50['className'] = 'page-highlight';
            _0x399bx50['type'] = 'text/css';
            _0x399bx50['href'] = 'styles/highlights/highlight_' + _0x399bx53[1] + '.css';
            if (!document['querySelectorAll']('.page-highlight')['length']) {
                document['getElementsByTagName']('head')[0]['appendChild'](_0x399bx50);
                document['body']['setAttribute']('data-highlight', 'highlight-' + _0x399bx53[1]);
                localStorage['setItem'](_0x399bx4 + '-Highlight', _0x399bx53[1])
            }
        };
        var _0x399bx56 = localStorage['getItem'](_0x399bx4 + '-Gradient');
        if (_0x399bx56) {
            document['body']['setAttribute']('data-gradient', 'body-' + _0x399bx56 + '')
        };
        const _0x399bx57 = document['querySelectorAll']('[data-toggle-theme]');

        if (localStorage['getItem'](_0x399bx4 + '-Theme') == 'dark-mode') {
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx57['length']; _0x399bxa++) {
                _0x399bx57[_0x399bxa]['checked'] = 'checked'
            };
            document['body']['className'] = 'theme-dark'
        };
        if (localStorage['getItem'](_0x399bx4 + '-Theme') == 'light-mode') {
            document['body']['className'] = 'theme-light'
        };
        if (document['body']['className'] == 'detect-theme') {
            _0x399bx5e()
        };
        const _0x399bx63 = document['querySelectorAll']('.detect-dark-mode');
        _0x399bx63['forEach']((_0x399bxc) => {
            return _0x399bxc['addEventListener']('click', (_0x399bxb) => {
                document['body']['classList']['remove']('theme-light', 'theme-dark');
                document['body']['classList']['add']('detect-theme');
                setTimeout(function() {
                    _0x399bx5e()
                }, 50)
            })
        });
        const _0x399bx64 = document['querySelectorAll']('.accordion-btn');
        if (_0x399bx64['length']) {
            _0x399bx64['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bx65) => {
                    _0x399bxc['querySelector']('i:last-child')['classList']['toggle']('fa-rotate-180')
                })
            })
        };
        const _0x399bx7c = document['querySelectorAll']('.card-scale');
        if (_0x399bx7c['length']) {
            _0x399bx7c['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseenter', (_0x399bx65) => {
                    _0x399bxc['querySelectorAll']('img')[0]['classList']['add']('card-scale-image')
                })
            });
            _0x399bx7c['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseleave', (_0x399bx65) => {
                    _0x399bxc['querySelectorAll']('img')[0]['classList']['remove']('card-scale-image')
                })
            })
        };
        const _0x399bx7d = document['querySelectorAll']('.card-hide');
        if (_0x399bx7d['length']) {
            _0x399bx7d['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseenter', (_0x399bx65) => {
                    _0x399bxc['querySelectorAll']('.card-center, .card-bottom, .card-top, .card-overlay')[0]['classList']['add']('card-hide-image')
                })
            });
            _0x399bx7d['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseleave', (_0x399bx65) => {
                    _0x399bxc['querySelectorAll']('.card-center, .card-bottom, .card-top, .card-overlay')[0]['classList']['remove']('card-hide-image')
                })
            })
        };
        const _0x399bx7e = document['querySelectorAll']('.card-rotate');
        if (_0x399bx7e['length']) {
            _0x399bx7e['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseenter', (_0x399bx65) => {
                    _0x399bxc['querySelectorAll']('img')[0]['classList']['add']('card-rotate-image')
                })
            });
            _0x399bx7e['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseleave', (_0x399bx65) => {
                    _0x399bxc['querySelectorAll']('img')[0]['classList']['remove']('card-rotate-image')
                })
            })
        };
        const _0x399bx7f = document['querySelectorAll']('.card-grayscale');
        if (_0x399bx7f['length']) {
            _0x399bx7f['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseenter', (_0x399bx65) => {
                    _0x399bxc['querySelectorAll']('img')[0]['classList']['add']('card-grayscale-image')
                })
            });
            _0x399bx7f['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseleave', (_0x399bx65) => {
                    _0x399bxc['querySelectorAll']('img')[0]['classList']['remove']('card-grayscale-image')
                })
            })
        };
        const _0x399bx80 = document['querySelectorAll']('.card-blur');
        if (_0x399bx80['length']) {
            _0x399bx80['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseenter', (_0x399bx65) => {
                    _0x399bxc['querySelectorAll']('img')[0]['classList']['add']('card-blur-image')
                })
            });
            _0x399bx80['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseleave', (_0x399bx65) => {
                    _0x399bxc['querySelectorAll']('img')[0]['classList']['remove']('card-blur-image')
                })
            })
        };
        var _0x399bx81 = document['querySelectorAll']('.check-visited');
        if (_0x399bx81['length']) {
            function _0x399bx82() {
                var _0x399bx83 = JSON['parse'](localStorage['getItem'](_0x399bx4 + '_Visited_Links')) || [];
                var _0x399bx84 = document['querySelectorAll']('.check-visited a');
                for (let _0x399bxa = 0; _0x399bxa < _0x399bx84['length']; _0x399bxa++) {
                    var _0x399bx85 = _0x399bx84[_0x399bxa];
                    _0x399bx85['addEventListener']('click', function(_0x399bxb) {
                        var _0x399bx86 = this['href'];
                        if (_0x399bx83['indexOf'](_0x399bx86) == -1) {
                            _0x399bx83['push'](_0x399bx86);
                            localStorage['setItem'](_0x399bx4 + '_Visited_Links', JSON['stringify'](_0x399bx83))
                        }
                    });
                    if (_0x399bx83['indexOf'](_0x399bx85['href']) !== -1) {
                        _0x399bx85['className'] += ' visited-link'
                    }
                }
            }
            _0x399bx82()
        };
        var _0x399bx93 = document['querySelectorAll']('.stepper-add');
        var _0x399bx94 = document['querySelectorAll']('.stepper-sub');
        if (_0x399bx93['length']) {
            _0x399bx93['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bx65) => {
                    var _0x399bx95 = _0x399bxc['parentElement']['querySelector']('input')['value'];
                    _0x399bxc['parentElement']['querySelector']('input')['value'] = +_0x399bx95 + 1
                })
            });
            _0x399bx94['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bx65) => {
                    var _0x399bx95 = _0x399bxc['parentElement']['querySelector']('input')['value'];
                    _0x399bxc['parentElement']['querySelector']('input')['value'] = +_0x399bx95 - 1
                })
            })
        };
        var _0x399bx96 = document['querySelectorAll']('[data-trigger-switch]:not([data-toggle-theme])');
        if (_0x399bx96['length']) {
            _0x399bx96['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bx65) => {
                    var _0x399bx97 = _0x399bxc['getAttribute']('data-trigger-switch');
                    var _0x399bx98 = document['getElementById'](_0x399bx97);
                    _0x399bx98['checked'] ? _0x399bx98['checked'] = false : _0x399bx98['checked'] = true
                })
            })
        };
        var _0x399bx99 = document['querySelectorAll']('.classic-toggle');
        if (_0x399bx99['length']) {
            _0x399bx99['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bx65) => {
                    _0x399bxc['querySelector']('i:last-child')['classList']['toggle']('fa-rotate-180');
                    _0x399bxc['querySelector']('i:last-child')['style']['transition'] = 'all 250ms ease'
                })
            })
        };
        var _0x399bx9a = document['querySelectorAll']('[data-toast]');
        if (_0x399bx9a['length']) {
            _0x399bx9a['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bx65) => {
                    var _0x399bx9b = _0x399bxc['getAttribute']('data-toast');
                    var _0x399bx9c = document['getElementById'](_0x399bx9b);
                    var _0x399bx9c = new bootstrap.Toast(_0x399bx9c);
                    _0x399bx9c['show']()
                })
            })
        };
        var _0x399bx9d = []['slice']['call'](document['querySelectorAll']('[data-bs-toggle=\"dropdown\"]'));
        if (_0x399bx9d['length']) {
            var _0x399bx9e = _0x399bx9d['map'](function(_0x399bx9f) {
                return new bootstrap.Dropdown(_0x399bx9f)
            })
        };
        var _0x399bxa0 = document['querySelectorAll']('.show-business-opened, .show-business-closed, .working-hours');
        if (_0x399bxa0['length']) {
            var _0x399bx40 = new Date();
            var _0x399bxa1 = _0x399bx40['getDay']();
            var _0x399bxa2 = _0x399bx40['getHours']() + '.' + _0x399bx40['getMinutes']();
            var _0x399bxa3 = [
                ['Sunday'],
                ['Monday', 9.00, 17.00],
                ['Tuesday', 9.00, 17.00],
                ['Wednesday', 9.00, 17.00],
                ['Thursday', 9.00, 17.00],
                ['Friday', 9.00, 17.00],
                ['Saturday', 9.00, 13.00]
            ];
            var _0x399bxa4 = _0x399bxa3[_0x399bxa1];
            var _0x399bxa5 = document['querySelectorAll']('.show-business-opened');
            var _0x399bxa6 = document['querySelectorAll']('.show-business-closed');
            if (_0x399bxa2 > _0x399bxa4[1] && _0x399bxa2 < _0x399bxa4[2] || _0x399bxa2 > _0x399bxa4[3] && _0x399bxa2 < _0x399bxa4[4]) {
                _0x399bxa5['forEach'](function(_0x399bxb) {
                    _0x399bxb['classList']['remove']('disabled')
                });
                _0x399bxa6['forEach'](function(_0x399bxb) {
                    _0x399bxb['classList']['add']('disabled')
                })
            } else {
                _0x399bxa5['forEach'](function(_0x399bxb) {
                    _0x399bxb['classList']['add']('disabled')
                });
                _0x399bxa6['forEach'](function(_0x399bxb) {
                    _0x399bxb['classList']['remove']('disabled')
                })
            };
            var _0x399bxa0 = document['querySelectorAll']('.working-hours[data-day]');
            _0x399bxa0['forEach'](function(_0x399bxa7) {
                var _0x399bxa8 = _0x399bxa7['getAttribute']('data-day');
                if (_0x399bxa8 === _0x399bxa4[0]) {
                    var _0x399bxa9 = '[data-day=\"' + _0x399bxa4[0] + '\"]';
                    if (_0x399bxa2 > _0x399bxa4[1] && _0x399bxa2 < _0x399bxa4[2] || _0x399bxa2 > _0x399bxa4[3] && _0x399bxa2 < _0x399bxa4[4]) {
                        document['querySelectorAll'](_0x399bxa9)[0]['classList']['add']('bg-green-dark');
                        document['querySelectorAll'](_0x399bxa9 + ' p')['forEach'](function(_0x399bxaa) {
                            _0x399bxaa['classList']['add']('color-white')
                        })
                    } else {
                        document['querySelectorAll'](_0x399bxa9)[0]['classList']['add']('bg-red-dark');
                        document['querySelectorAll'](_0x399bxa9 + ' p')['forEach'](function(_0x399bxaa) {
                            _0x399bxaa['classList']['add']('color-white')
                        })
                    }
                }
            })
        };
        var _0x399bxaf = document['querySelectorAll']('[data-timed-ad]');
        if (_0x399bxaf['length']) {
            _0x399bxaf['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bxb) => {
                    var _0x399bxb0 = _0x399bxc['getAttribute']('data-timed-ad');
                    var _0x399bxb1 = _0x399bxc['getAttribute']('data-menu');
                    var _0x399bxb2 = _0x399bxb0;
                    var _0x399bxb3 = setInterval(function() {
                        if (_0x399bxb2 <= 1) {
                            clearInterval(_0x399bxb3);
                            document['getElementById'](_0x399bxb1)['querySelectorAll']('.fa-times')[0]['classList']['remove']('disabled');
                            document['getElementById'](_0x399bxb1)['querySelectorAll']('.close-menu')[0]['classList']['remove']('no-click');
                            document['getElementById'](_0x399bxb1)['querySelectorAll']('span')[0]['style']['display'] = 'none'
                        } else {};
                        document['getElementById'](_0x399bxb1)['querySelectorAll']('span')[0]['innerHTML'] = _0x399bxb2 -= 1
                    }, 1000)
                })
            })
        };
        var _0x399bxb4 = document['querySelectorAll']('[data-auto-show-ad]');
        if (_0x399bxb4['length']) {
            var _0x399bxb5 = _0x399bxb4[0]['getAttribute']('data-auto-show-ad');
            var _0x399bxb3 = setInterval(function() {
                if (_0x399bxb5 <= 1) {
                    clearInterval(_0x399bxb3);
                    var _0x399bxb6 = _0x399bxb4[0]['getAttribute']('data-menu');
                    document['getElementById'](_0x399bxb6)['classList']['add']('menu-active');
                    var _0x399bxb7 = _0x399bxb4[0]['getAttribute']('data-timed-ad');
                    var _0x399bxb8 = setInterval(function() {
                        if (_0x399bxb7 <= 0) {
                            clearInterval(_0x399bxb8);
                            document['getElementById'](_0x399bxb6)['querySelectorAll']('.fa-times')[0]['classList']['remove']('disabled');
                            document['getElementById'](_0x399bxb6)['querySelectorAll']('.close-menu')[0]['classList']['remove']('no-click');
                            document['getElementById'](_0x399bxb6)['querySelectorAll']('span')[0]['style']['display'] = 'none'
                        };
                        document['getElementById'](_0x399bxb6)['querySelectorAll']('span')[0]['innerHTML'] = _0x399bxb7 -= 1
                    }, 1000)
                };
                _0x399bxb5 -= 1
            }, 1000)
        };
        var _0x399bxb9 = document['querySelectorAll']('.reading-progress-text');
        if (_0x399bxb9['length']) {
            var _0x399bxba = _0x399bxb9[0]['innerHTML']['split'](' ')['length'];
            var _0x399bxbb = Math['floor'](_0x399bxba / 250);
            var _0x399bxbc = _0x399bxba % 60;
            document['getElementsByClassName']('reading-progress-words')[0]['innerHTML'] = _0x399bxba;
            document['getElementsByClassName']('reading-progress-time')[0]['innerHTML'] = _0x399bxbb + ':' + _0x399bxbc
        };
        var _0x399bxbd = document['querySelectorAll']('.text-size-changer');
        if (_0x399bxbd['length']) {
            var _0x399bxbe = document['querySelectorAll']('.text-size-increase');
            var _0x399bxbf = document['querySelectorAll']('.text-size-decrease');
            var _0x399bxc0 = document['querySelectorAll']('.text-size-default');
            _0x399bxbe[0]['addEventListener']('click', function() {
                _0x399bxbd[0]['querySelectorAll']('*')['forEach'](function(_0x399bxc1) {
                    const _0x399bxc2 = window['getComputedStyle'](_0x399bxc1)['fontSize']['split']('px', 2)[0];
                    _0x399bxc1['style']['fontSize'] = (+_0x399bxc2 + 1) + 'px'
                })
            });
            _0x399bxbf[0]['addEventListener']('click', function() {
                _0x399bxbd[0]['querySelectorAll']('*')['forEach'](function(_0x399bxc1) {
                    const _0x399bxc2 = window['getComputedStyle'](_0x399bxc1)['fontSize']['split']('px', 2)[0];
                    _0x399bxc1['style']['fontSize'] = (+_0x399bxc2 - 1) + 'px'
                })
            });
            _0x399bxc0[0]['addEventListener']('click', function() {
                _0x399bxbd[0]['querySelectorAll']('*')['forEach'](function(_0x399bxc1) {
                    const _0x399bxc2 = window['getComputedStyle'](_0x399bxc1)['fontSize']['split']('px', 2)[0];
                    _0x399bxc1['style']['fontSize'] = ''
                })
            })
        };
        var _0x399bxc3 = document['querySelectorAll']('.qr-image');
        if (_0x399bxc3['length']) {
            var _0x399bxc4 = window['location']['href'];
            var _0x399bxc5 = document['getElementsByClassName']('generate-qr-auto')[0];
            var _0x399bxc6 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
            if (_0x399bxc5) {
                _0x399bxc5['setAttribute']('src', _0x399bxc6 + _0x399bxc4)
            };
            var _0x399bxc7 = document['getElementsByClassName']('generate-qr-button')[0];
            if (_0x399bxc7) {
                _0x399bxc7['addEventListener']('click', function() {
                    var _0x399bxc8 = document['getElementsByClassName']('qr-url')[0]['value'];
                    var _0x399bxc6 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
                    var _0x399bxc9 = '<img class=\"mx-auto polaroid-effect shadow-l mt-4 delete-qr\" width=\"200\" src=\"' + _0x399bxc6 + _0x399bxc8 + '\" alt=\"img\"><p class=\"font-11 text-center mb-0\">' + _0x399bxc8 + '</p>';
                    document['getElementsByClassName']('generate-qr-result')[0]['innerHTML'] = _0x399bxc9;
                    _0x399bxc7['innerHTML'] = 'Generate New Button'
                })
            }
        };
        if (window['location']['protocol'] === 'file:') {
            var _0x399bxca = document['querySelectorAll']('a');
            _0x399bxca['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('mouseover', (_0x399bx65) => {})
            })
        };
        var _0x399bxcb = document['querySelectorAll']('[data-search]');
        if (_0x399bxcb['length']) {
            var _0x399bxcc = document['querySelectorAll']('.search-results');
            var _0x399bxcd = document['querySelectorAll']('.search-no-results');
            var _0x399bxce = document['querySelectorAll']('.search-results div')[0]['childElementCount'];
            var _0x399bxcf = document['querySelectorAll']('.search-trending');
            var _0x399bxd0 = document['querySelectorAll']('.clear-search')[0];
            _0x399bxd0['addEventListener']('click', function() {
                _0x399bxcb[0]['value'] = '';
                _0x399bxd0['classList']['add']('disabled');
                _0x399bxcd[0]['classList']['add']('disabled');
                _0x399bxcc[0]['classList']['add']('disabled-search-list');
                if (_0x399bxcf[0]) {
                    _0x399bxcf[0]['classList']['remove']('disabled')
                };
                var _0x399bxd1 = document['querySelectorAll']('[data-filter-item]');
                for (let _0x399bxa = 0; _0x399bxa < _0x399bxd1['length']; _0x399bxa++) {
                    _0x399bxd1[_0x399bxa]['classList']['add']('disabled')
                }
            });

            function _0x399bxd2() {
                var _0x399bxd3 = _0x399bxcb[0]['value'];
                var _0x399bxd4 = _0x399bxd3['toLowerCase']();
                if (_0x399bxd4 != '') {
                    _0x399bxd0['classList']['remove']('disabled');
                    _0x399bxcc[0]['classList']['remove']('disabled-search-list');
                    var _0x399bxd1 = document['querySelectorAll']('[data-filter-item]');
                    for (let _0x399bxa = 0; _0x399bxa < _0x399bxd1['length']; _0x399bxa++) {
                        var _0x399bxd5 = _0x399bxd1[_0x399bxa]['getAttribute']('data-filter-name');
                        if (_0x399bxd5['includes'](_0x399bxd4)) {
                            _0x399bxd1[_0x399bxa]['classList']['remove']('disabled');
                            if (_0x399bxcf['length']) {
                                _0x399bxcf[0]['classList']['add']('disabled')
                            }
                        } else {
                            _0x399bxd1[_0x399bxa]['classList']['add']('disabled');
                            if (_0x399bxcf['length']) {
                                _0x399bxcf[0]['classList']['remove']('disabled')
                            }
                        };
                        var _0x399bxd6 = document['querySelectorAll']('.search-results div')[0]['getElementsByClassName']('disabled')['length'];
                        if (_0x399bxd6 === _0x399bxce) {
                            _0x399bxcd[0]['classList']['remove']('disabled');
                            if (_0x399bxcf['length']) {
                                _0x399bxcf[0]['classList']['add']('disabled')
                            }
                        } else {
                            _0x399bxcd[0]['classList']['add']('disabled');
                            if (_0x399bxcf['length']) {
                                _0x399bxcf[0]['classList']['add']('disabled')
                            }
                        }
                    }
                };
                if (_0x399bxd4 === '') {
                    _0x399bxd0['classList']['add']('disabled');
                    _0x399bxcc[0]['classList']['add']('disabled-search-list');
                    _0x399bxcd[0]['classList']['add']('disabled');
                    if (_0x399bxcf['length']) {
                        _0x399bxcf[0]['classList']['remove']('disabled')
                    }
                }
            }
            _0x399bxcb[0]['addEventListener']('keyup', function() {
                _0x399bxd2()
            });
            _0x399bxcb[0]['addEventListener']('click', function() {
                _0x399bxd2()
            });
            var _0x399bxd7 = document['querySelectorAll']('.search-trending a');
            _0x399bxd7['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bx65) => {
                    var _0x399bxd8 = _0x399bxc['querySelectorAll']('span')[0]['textContent']['toLowerCase']();
                    _0x399bxcb[0]['value'] = _0x399bxd8;
                    _0x399bxcb[0]['click']()
                })
            })
        };
        var _0x399bxd9 = document['querySelectorAll']('[data-toggle-search]');
        if (_0x399bxd9) {
            _0x399bxd9['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bx65) => {
                    window['scrollTo']({
                        top: 0,
                        behavior: `${'smooth'}`
                    });
                    document['querySelectorAll']('.header')[0]['classList']['toggle']('header-search-active')
                })
            })
        };
        var _0x399bxeb = document['querySelectorAll']('[data-bs-toggle=\"collapse\"]:not(.no-effect)');
        if (_0x399bxeb['length']) {
            _0x399bxeb['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bxb) => {
                    if (_0x399bxc['querySelectorAll']('i')['length']) {
                        _0x399bxc['querySelector']('i')['classList']['toggle']('fa-rotate-180')
                    }
                })
            })
        };

        var _0x399bxf2 = document['querySelectorAll']('[data-auto-activate]');
        if (_0x399bxf2['length']) {
            setTimeout(function() {
                _0x399bxf2[0]['classList']['add']('menu-active');
                _0x399bxd[0]['classList']['add']('menu-active')
            }, 0)
        };
        var _0x399bxf3 = document['getElementById']('copyright-year');
        if (_0x399bxf3) {
            var _0x399bxf4 = new Date();
            const _0x399bxf5 = _0x399bxf4['getFullYear']();
            _0x399bxf3['textContent'] = _0x399bxf5
        };
        var _0x399bxf6 = document['querySelectorAll']('.check-age');
        if (_0x399bxf6['length']) {
            _0x399bxf6[0]['addEventListener']('click', function() {
                var _0x399bxf7 = document['querySelectorAll']('#date-birth-day')[0]['value'];
                var _0x399bxf8 = document['querySelectorAll']('#date-birth-month')[0]['value'];
                var _0x399bxf9 = document['querySelectorAll']('#date-birth-year')[0]['value'];
                var _0x399bxfa = 18;
                var _0x399bxfb = new Date();
                _0x399bxfb['setFullYear'](_0x399bxf9, _0x399bxf8 - 1, _0x399bxf7);
                var _0x399bxfc = new Date();
                var _0x399bxfd = new Date();
                _0x399bxfd['setFullYear'](_0x399bxfb['getFullYear']() + _0x399bxfa, _0x399bxf8 - 1, _0x399bxf7);
                var _0x399bxfe = document['querySelectorAll']('#menu-age');
                var _0x399bxff = document['querySelectorAll']('#menu-age-fail');
                var _0x399bx100 = document['querySelectorAll']('#menu-age-okay');
                console['log'](_0x399bxfc);
                console['log'](_0x399bxfd);
                console['log'](_0x399bxf8);
                if ((_0x399bxfc - _0x399bxfd) > 0) {
                    console['log']('above 18');
                    _0x399bxfe[0]['classList']['remove']('menu-active');
                    _0x399bx100[0]['classList']['add']('menu-active')
                } else {
                    _0x399bxfe[0]['classList']['remove']('menu-active');
                    _0x399bxff[0]['classList']['add']('menu-active')
                };
                return true
            })
        };
        var _0x399bx101 = document['querySelectorAll']('.offline-message');
        if (!_0x399bx101['length']) {
            const _0x399bx102 = document['createElement']('p');
            const _0x399bx103 = document['createElement']('p');
            _0x399bx102['className'] = 'offline-message bg-red-dark color-white';
            _0x399bx102['textContent'] = 'No internet connection detected';
            _0x399bx103['className'] = 'online-message bg-green-dark color-white';
            _0x399bx103['textContent'] = 'You are back online';
            document['getElementsByTagName']('body')[0]['appendChild'](_0x399bx102);
            document['getElementsByTagName']('body')[0]['appendChild'](_0x399bx103)
        };

        function _0x399bx104() {
            var _0x399bx105 = document['querySelectorAll']('a');
            _0x399bx105['forEach'](function(_0x399bxb) {
                var _0x399bx106 = _0x399bxb['getAttribute']('href');
                if (_0x399bx106['match'](/.html/)) {
                    _0x399bxb['classList']['add']('show-offline');
                    _0x399bxb['setAttribute']('data-link', _0x399bx106);
                    _0x399bxb['setAttribute']('href', '#')
                }
            });
            var _0x399bx107 = document['querySelectorAll']('.show-offline');
            _0x399bx107['forEach']((_0x399bxc) => {
                return _0x399bxc['addEventListener']('click', (_0x399bx65) => {
                    document['getElementsByClassName']('offline-message')[0]['classList']['add']('offline-message-active');
                    setTimeout(function() {
                        document['getElementsByClassName']('offline-message')[0]['classList']['remove']('offline-message-active')
                    }, 1500)
                })
            })
        }

        function _0x399bx108() {
            var _0x399bx109 = document['querySelectorAll']('[data-link]');
            _0x399bx109['forEach'](function(_0x399bxb) {
                var _0x399bx106 = _0x399bxb['getAttribute']('data-link');
                if (_0x399bx106['match'](/.html/)) {
                    _0x399bxb['setAttribute']('href', _0x399bx106);
                    _0x399bxb['removeAttribute']('data-link', '')
                }
            })
        }
        var _0x399bx10a = document['getElementsByClassName']('offline-message')[0];
        var _0x399bx10b = document['getElementsByClassName']('online-message')[0];

        function _0x399bx10c() {
            _0x399bx108();
            _0x399bx10b['classList']['add']('online-message-active');
            setTimeout(function() {
                _0x399bx10b['classList']['remove']('online-message-active')
            }, 2000);
            console['info']('Connection: Online')
        }

        function _0x399bx10d() {
            _0x399bx104();
            _0x399bx10a['classList']['add']('offline-message-active');
            setTimeout(function() {
                _0x399bx10a['classList']['remove']('offline-message-active')
            }, 2000);
            console['info']('Connection: Offline')
        }
        var _0x399bx10e = document['querySelectorAll']('.simulate-offline');
        var _0x399bx10f = document['querySelectorAll']('.simulate-online');
        if (_0x399bx10e['length']) {
            _0x399bx10e[0]['addEventListener']('click', function() {
                _0x399bx10d()
            });
            _0x399bx10f[0]['addEventListener']('click', function() {
                _0x399bx10c()
            })
        };

        function _0x399bx110(_0x399bx65) {
            var _0x399bx111 = navigator['onLine'] ? 'online' : 'offline';
            _0x399bx10c()
        }

        function _0x399bx112(_0x399bx65) {
            _0x399bx10d()
        }
        window['addEventListener']('online', _0x399bx110);
        window['addEventListener']('offline', _0x399bx112);
        const _0x399bx113 = document['querySelectorAll']('.simulate-iphone-badge');
        _0x399bx113['forEach']((_0x399bxc) => {
            return _0x399bxc['addEventListener']('click', (_0x399bxb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['add']('add-to-home-visible', 'add-to-home-ios');
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-android')
            })
        });
        const _0x399bx114 = document['querySelectorAll']('.simulate-android-badge');
        _0x399bx114['forEach']((_0x399bxc) => {
            return _0x399bxc['addEventListener']('click', (_0x399bxb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['add']('add-to-home-visible', 'add-to-home-android');
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-ios')
            })
        });
        const _0x399bx115 = document['querySelectorAll']('.add-to-home');
        _0x399bx115['forEach']((_0x399bxc) => {
            return _0x399bxc['addEventListener']('click', (_0x399bxb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-visible')
            })
        });
        let _0x399bx116 = {
            Android: function() {
                return navigator['userAgent']['match'](/Android/i)
            },
            iOS: function() {
                return navigator['userAgent']['match'](/iPhone|iPad|iPod/i)
            },
            any: function() {
                return (_0x399bx116.Android() || _0x399bx116['iOS']())
            }
        };
        const _0x399bx117 = document['getElementsByClassName']('show-android');
        const _0x399bx118 = document['getElementsByClassName']('show-ios');
        const _0x399bx119 = document['getElementsByClassName']('show-no-device');
        if (!_0x399bx116['any']()) {
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx118['length']; _0x399bxa++) {
                _0x399bx118[_0x399bxa]['classList']['add']('disabled')
            };
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx117['length']; _0x399bxa++) {
                _0x399bx117[_0x399bxa]['classList']['add']('disabled')
            }
        };
        if (_0x399bx116['iOS']()) {
            document['querySelectorAll']('#page')[0]['classList']['add']('device-is-ios');
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx119['length']; _0x399bxa++) {
                _0x399bx119[_0x399bxa]['classList']['add']('disabled')
            };
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx117['length']; _0x399bxa++) {
                _0x399bx117[_0x399bxa]['classList']['add']('disabled')
            }
        };
        if (_0x399bx116.Android()) {
            document['querySelectorAll']('#page')[0]['classList']['add']('device-is-android');
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx118['length']; _0x399bxa++) {
                _0x399bx118[_0x399bxa]['classList']['add']('disabled')
            };
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx119['length']; _0x399bxa++) {
                _0x399bx119[_0x399bxa]['classList']['add']('disabled')
            }
        };
        var _0x399bx11a = document['querySelectorAll']('.otp');
        if (_0x399bx11a[0]) {
            _0x399bx11a['forEach']((_0x399bxc) => {
                _0x399bxc['addEventListener']('focus', (_0x399bxb) => {
                    _0x399bxc['value'] = ''
                });
                _0x399bxc['addEventListener']('input', (_0x399bxb) => {
                    _0x399bxc['nextElementSibling'] ? _0x399bxc['nextElementSibling']['focus']() : _0x399bxc['blur']()
                })
            })
        };
        if (_0x399bx6 === true) {
            caches['delete']('workbox-runtime')['then'](function() {});
            sessionStorage['clear']();
            caches['keys']()['then']((_0x399bx125) => {
                _0x399bx125['forEach']((_0x399bx126) => {
                    caches['delete'](_0x399bx126)
                })
            })
        };
        var _0x399bx127 = new LazyLoad();
        var _0x399bx128, _0x399bx129, _0x399bx12a, _0x399bx12b;
        var _0x399bx12c = 'plugins/';
        let _0x399bx12d = [{
            id: 'uniqueID',
            plug: 'pluginName/plugin.js',
            call: 'pluginName/pluginName-call.js',
            style: 'pluginName/pluginName-style.css',
            trigger: '.pluginTriggerClass'
        }, {
            id: 'charts-js-plugin',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-graphs.js',
            trigger: '.graph'
        }, {
            id: 'count',
            plug: 'countdown/countdown.js',
            trigger: '.countdown'
        }, {
            id: 'gallery',
            plug: 'glightbox/glightbox.js',
            call: 'glightbox/glightbox-call.js',
            style: 'glightbox/glightbox.css',
            trigger: '[data-gallery]'
        }, {
            id: 'gallery-views',
            call: 'galleryViews/gallery-views.js',
            trigger: '.gallery-view-controls'
        }, {
            id: 'filter',
            plug: 'filterizr/filterizr.js',
            call: 'filterizr/filterizr-call.js',
            style: 'filterizr/filterizr.css',
            trigger: '.gallery-filter'
        }, {
            id: 'ba-slider',
            call: 'before-after/before-after.js',
            style: 'before-after/before-after.css',
            trigger: '#before-after-slider'
        }];
        for (let _0x399bxa = 0; _0x399bxa < _0x399bx12d['length']; _0x399bxa++) {
            if (document['querySelectorAll']('.' + _0x399bx12d[_0x399bxa]['id'] + '-c')['length']) {
                document['querySelectorAll']('.' + _0x399bx12d[_0x399bxa]['id'] + '-c')[0]['remove']()
            };
            var _0x399bx12e = document['querySelectorAll'](_0x399bx12d[_0x399bxa]['trigger']);
            if (_0x399bx12e['length']) {
                var _0x399bx12f = document['getElementsByTagName']('script')[1],
                    _0x399bx130 = document['createElement']('script');
                _0x399bx130['type'] = 'text/javascript';
                _0x399bx130['className'] = _0x399bx12d[_0x399bxa]['id'] + '-p';
                _0x399bx130['src'] = _0x399bx12c + _0x399bx12d[_0x399bxa]['plug'];
                _0x399bx130['addEventListener']('load', function() {
                    if (_0x399bx12d[_0x399bxa]['call'] !== undefined) {
                        var _0x399bx131 = document['getElementsByTagName']('script')[2],
                            _0x399bx132 = document['createElement']('script');
                        _0x399bx132['type'] = 'text/javascript';
                        _0x399bx132['className'] = _0x399bx12d[_0x399bxa]['id'] + '-c';
                        _0x399bx132['src'] = _0x399bx12c + _0x399bx12d[_0x399bxa]['call'];
                        _0x399bx131['parentNode']['insertBefore'](_0x399bx132, _0x399bx131)
                    }
                });
                if (!document['querySelectorAll']('.' + _0x399bx12d[_0x399bxa]['id'] + '-p')['length'] && _0x399bx12d[_0x399bxa]['plug'] !== undefined) {
                    _0x399bx12f['parentNode']['insertBefore'](_0x399bx130, _0x399bx12f)
                } else {
                    setTimeout(function() {
                        var _0x399bx12f = document['getElementsByTagName']('script')[1],
                            _0x399bx130 = document['createElement']('script');
                        _0x399bx130['type'] = 'text/javascript';
                        _0x399bx130['className'] = _0x399bx12d[_0x399bxa]['id'] + '-c';
                        _0x399bx130['src'] = _0x399bx12c + _0x399bx12d[_0x399bxa]['call'];
                        _0x399bx12f['parentNode']['insertBefore'](_0x399bx130, _0x399bx12f)
                    }, 50)
                };
                if (_0x399bx12d[_0x399bxa]['style'] !== undefined) {
                    if (!document['querySelectorAll']('.' + _0x399bx12d[_0x399bxa]['id'] + '-s')['length']) {
                        var _0x399bx133 = document['createElement']('link');
                        _0x399bx133['className'] = _0x399bx12d[_0x399bxa]['id'] + '-s';
                        _0x399bx133['rel'] = 'stylesheet';
                        _0x399bx133['type'] = 'text/css';
                        _0x399bx133['href'] = _0x399bx12c + _0x399bx12d[_0x399bxa]['style'];
                        document['getElementsByTagName']('head')[0]['appendChild'](_0x399bx133)
                    }
                }
            }
        }
    }

    _0x399bx9()
})