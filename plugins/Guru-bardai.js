const _0x11d18b = _0x1fe9
;(function (_0x32c016, _0x500f6f) {
  const _0x889755 = _0x1fe9
  const _0x338c74 = _0x32c016()
  while (!![]) {
    try {
      const _0x3ec04b =
        (-parseInt(_0x889755(0xb9)) / 0x1) * (-parseInt(_0x889755(0x9e)) / 0x2) +
        (parseInt(_0x889755(0xab)) / 0x3) * (parseInt(_0x889755(0x9b)) / 0x4) +
        -parseInt(_0x889755(0xa5)) / 0x5 +
        (parseInt(_0x889755(0xa3)) / 0x6) * (parseInt(_0x889755(0x9c)) / 0x7) +
        -parseInt(_0x889755(0xaa)) / 0x8 +
        parseInt(_0x889755(0xb4)) / 0x9 +
        -parseInt(_0x889755(0xba)) / 0xa
      if (_0x3ec04b === _0x500f6f) {
        break
      } else {
        _0x338c74['push'](_0x338c74['shift']())
      }
    } catch (_0x3f41ce) {
      _0x338c74['push'](_0x338c74['shift']())
    }
  }
})(_0x5d1d, 0x6620d)
function _0x5d1d() {
  const _0x13e402 = [
    '2149czhMFs',
    'question',
    '19224pTUiMt',
    'Thinking...',
    'help',
    'slice',
    'length',
    '8520gRhiiV',
    'content',
    '1864985lwYtCl',
    'qmOrl',
    'react',
    'mcePV',
    'sGswq',
    '1508920XFhUvM',
    '1596CePYhS',
    'reply',
    'knNuL',
    'bard',
    'questionWithImage',
    'Give\x20some\x20text',
    'join',
    'gemini',
    'tags',
    '4435992kcjxCn',
    'mimetype',
    'msg',
    'text',
    'download',
    '52dBwBnZ',
    '9073070Nutyms',
    'An\x20error\x20occured',
    'quoted',
    'command',
    '3448avTEXF',
  ]
  _0x5d1d = function () {
    return _0x13e402
  }
  return _0x5d1d()
}
import _0x13e160 from '../lib/uploadImage.js'
import _0x51b114 from '../lib/bard.js'
const bardAi = new _0x51b114()
function _0x1fe9(_0xfdc4ab, _0x455fc3) {
  const _0x5d1d3b = _0x5d1d()
  _0x1fe9 = function (_0x1fe927, _0x273b1c) {
    _0x1fe927 = _0x1fe927 - 0x98
    let _0x88a39b = _0x5d1d3b[_0x1fe927]
    return _0x88a39b
  }
  return _0x1fe9(_0xfdc4ab, _0x455fc3)
}
let handler = async (
  _0x3f8109,
  { conn: _0x3858ca, args: _0x2328ad, usedPrefix: _0x190be4, command: _0x12b706 }
) => {
  const _0x3bc4c9 = _0x1fe9
  const _0x508d37 = {
    sGswq: function (_0x393c30, _0x20f4be) {
      return _0x393c30 >= _0x20f4be
    },
    mcePV: _0x3bc4c9(0xb0),
    jnTsT: _0x3bc4c9(0x9f),
    qmOrl: function (_0x3596e5, _0x547c1a, _0x38def4) {
      return _0x3596e5(_0x547c1a, _0x38def4)
    },
    knNuL: 'Only\x20images\x20are\x20supported',
  }
  let _0x45c267
  if (_0x508d37[_0x3bc4c9(0xa9)](_0x2328ad[_0x3bc4c9(0xa2)], 0x1)) {
    _0x45c267 = _0x2328ad[_0x3bc4c9(0xa1)](0x0)[_0x3bc4c9(0xb1)]('\x20')
  } else if (_0x3f8109['quoted'] && _0x3f8109['quoted'][_0x3bc4c9(0xb7)]) {
    _0x45c267 = _0x3f8109[_0x3bc4c9(0x99)]['text']
  } else return _0x3f8109['reply'](_0x508d37[_0x3bc4c9(0xa8)])
  let _0x2cab01 = _0x3f8109[_0x3bc4c9(0x99)] ? _0x3f8109['quoted'] : _0x3f8109
  let _0x9d974d = (_0x2cab01[_0x3bc4c9(0xb6)] || _0x2cab01)[_0x3bc4c9(0xb5)] || ''
  await _0x3f8109[_0x3bc4c9(0xa7)]('💸')
  await _0x3f8109['reply'](_0x508d37['jnTsT'])
  if (!_0x9d974d) {
    try {
      let _0x1d052c = await Bard(_0x45c267)
      await _0x3f8109['reply'](_0x1d052c[_0x3bc4c9(0xa4)])
    } catch (_0x37c6fb) {
      throw _0x3bc4c9(0x98)
    }
  } else {
    let _0x2ca9b1 = await _0x2cab01[_0x3bc4c9(0xb8)]()
    let _0xf95336 = /image\/(png|jpe?g)/['test'](_0x9d974d)
    if (_0xf95336) {
      let _0x519598 = await _0x13e160(_0x2ca9b1)
      let _0x350bba = await _0x508d37[_0x3bc4c9(0xa6)](BardImg, _0x45c267, _0x519598)
      await _0x3f8109[_0x3bc4c9(0xac)](_0x350bba[_0x3bc4c9(0xa4)])
    } else {
      await _0x3f8109['reply'](_0x508d37[_0x3bc4c9(0xad)])
    }
  }
}
handler[_0x11d18b(0xa0)] = [_0x11d18b(0xae)]
handler[_0x11d18b(0xb3)] = ['ai']
handler[_0x11d18b(0x9a)] = [_0x11d18b(0xae), _0x11d18b(0xb2)]
export default handler
async function Bard(_0x36ee67) {
  const _0x4a2def = _0x11d18b
  return await bardAi[_0x4a2def(0x9d)]({ ask: _0x36ee67 })
}
async function BardImg(_0x9e45de, _0x1d605e) {
  const _0xd15f47 = _0x11d18b
  return await bardAi[_0xd15f47(0xaf)]({ ask: _0x9e45de, image: _0x1d605e })
}