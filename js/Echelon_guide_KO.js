var lang_type = 'ko'

// inital
function mergeCell (table1, startRow, endRow, col) {
  var tb = document.getElementById(table1)
  if (!tb || !tb.rows || tb.rows.length <= 0) return
  if (col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) return
  if (endRow == 0) endRow = tb.rows.length - 1
  for (var i = startRow; i < endRow; i++) {
    tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col])
    tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1
  }
}
function loadScript (url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}
var lib_language // 语言库
lib_language = {
  main_draw_1: '번 자리:',
  main_draw_2: '피해',
  main_formatDPS_1: '시간',
  main_formatDPS_2: '피해',
  main_makeGraph_1: '시간',
  main_makeGraph_2: '피해',
  main_makeGraph_3: '체력',
  main_show_dmg: '공격',
  main_show_inj: '방어',
  main_makeGraph_dead: '타락한',

  UI_affect: '',
  UI_num: '번 자리',
  UI_dmg: '공격',
  UI_inj: '방어',
  UI_putsee: '여기에 받고 있는 진형 버프가 표시됩니다',
  UI_pickblock: '<b><span style="color: red">배치할 자리</span></b> 를 선택해 주세요',
  UI_not_2_python: ' *파이슨을 2기 이상 추가할 수 없습니다.',
  UI_not_2_carcano: ' *CarcanoM1891을 2기 이상 추가할 수 없습니다',
  UI_not_2_jill: ' *Jill을 2기 이상 추가할 수 없습니다',
  UI_fairydmg: '요정공격',
  UI_fairyinj: '요정방어',

  NAME_1: '콜트 리볼버',
  NAME_4: '콜트 파이슨',
  NAME_5: '나강 리볼버',
  NAME_6: '토카레프',
  NAME_7: '스테츠킨',
  NAME_8: '마카로프',
  NAME_13: '92식',
  NAME_14: '아스트라 리볼버',
  NAME_15: '글록17',
  NAME_16: '톰슨',
  NAME_27: '스콜피온',
  NAME_29: '스텐MkⅡ',
  NAME_31: '베레타 38형',
  NAME_32: '마이크로 우지',
  NAME_34: 'M1 개런드',
  NAME_36: '스프링필드',
  NAME_39: '모신나강',
  NAME_41: '시모노프',
  NAME_49: '56식 반',
  NAME_50: '리엔필드',
  NAME_66: '56-1식',
  NAME_71: '갈릴',
  NAME_89: '브렌',
  NAME_94: '64식',
  NAME_95: '한양조 88식',
  NAME_96: '그리즐리Mk V',
  NAME_112: '네게브',
  NAME_113: '세르듀코프',
  NAME_114: '웰로드MkⅡ',
  NAME_115: '수오미',
  NAME_127: '79식',
  NAME_129: '95식',
  NAME_130: '97식',
  NAME_132: '59식',
  NAME_133: '63식',
  NAME_150: '시프카',
  NAME_161: '97식 산탄총',
  NAME_171: '리베롤',
  NAME_174: '81식 카빈',
  NAME_183: '컨텐더',
  NAME_185: '아멜리',
  NAME_197: '카르카노M1891',
  NAME_198: '카르카노M91/38',
  NAME_199: '80식',
  NAME_201: '게파드 M1',
  NAME_202: '썬더',
  NAME_203: '허니뱃저',
  NAME_204: '발리스타',
  NAME_225: 'Cx4 스톰',
  NAME_228: '100식',
  NAME_233: 'Px4 스톰',
  NAME_238: '88식',
  NAME_239: '03식',
  NAME_243: '64식 소총',
  NAME_248: '제리코',
  NAME_249: '62식',
  NAME_253: '루이스',
  NAME_255: '스카웃',
  NAME_256: '팔콘',
  NAME_255: 'Magal',
  NAME_264: 'Chaucha',
  NAME_2001: '노엘',
  NAME_2002: '엘펠트',
  NAME_2003: '키아나',
  NAME_2004: '라이덴 메이',
  NAME_2005: '브로냐',
  NAME_2006: '테레사',
  NAME_2007: '히메코',
  NAME_2008: '제레',
  NAME_2009: '클리어',
  NAME_2010: '페일',
  NAME_2011: 'JILL',
  NAME_2012: 'SEI',
  NAME_2013: 'DOROTHY',
  NAME_2014: 'STELLA',
  NAME_2015: 'ALMA',
  NAME_2016: 'DANA',

  equipNAME_0: '장비 없음',
  equipNAME_12: '옵티컬',
  equipNAME_14: '이오텍',
  equipNAME_13: '레드닷',
  equipNAME_11: '소음기',
  equipNAME_17: 'APS 전용 개머리판',
  equipNAME_41: '야시장비',
  equipNAME_31: '외골격',
  equipNAME_33: '방탄판',
  equipNAME_21: 'ILM HP탄',
  equipNAME_23: 'Mk211 고폭철갑탄',
  equipNAME_22: 'APCR 고속탄',
  equipNAME_24: '#000 벅 샷',
  equipNAME_25: 'SABOT 슬러그탄',
  equipNAME_34: '열광학 미채 슈트',
  equipNAME_35: 'IOP대용량 탄약통',
  equipNAME_11001: '콜트 리볼버 연장총열',
  equipNAME_11005: '나강 리볼버용 소음기',
  equipNAME_11091: 'MP446C 경기용 총신',
  equipNAME_42009: 'Glory Light',
  equipNAME_42010: 'Black Cat',
  equipNAME_169: 'FÉLIN 조준경',
  equipNAME_4118: 'PKN03M 야간조준경',
  equipNAME_11063: 'G3 개량 총열뭉치',
  equipNAME_11064: 'G36 복합 조준경',
  equipNAME_354: '특수 전술기동장갑',
  equipNAME_11056: '디너게이트 RO',
  equipNAME_11057: '경량화 레일 킷',
  equipNAME_326: 'GSG UX 외골격',
  equipNAME_3103: 'UMP UX 외골격',
  equipNAME_31093: '강화 카트리지',
  equipNAME_11037: 'M2 양각대',
  equipNAME_11051: '조정간 트리거셋',
  equipNAME_1125: 'MG4 전용 MGO',
  equipNAME_11089: '브렌 L4 총열뭉치',
  equipNAME_21002: 'XM261 탄약',
  equipNAME_21057: '.300BLK 고속탄',
  equipNAME_21060: 'SP6亚音速弹',
  equipNAME_236: '사격경기용 철갑탄',
  equipNAME_362: '고성능 전술 헤어핀',
  equipNAME_31055: '남겨진 무기상자',
  equipNAME_11029: '스텐 전용 소음기',
  equipNAME_11103: '추가 연산 모듈',
  equipNAME_11094: '64식용 소음기',
  equipNAME_342: '두꺼운 푸른 슈트',
  equipNAME_31039: 'Hayha 메모리 칩',
  equipNAME_31044: '디지털 미채 슈트',
  equipNAME_388: '무한 탄약통',
  equipNAME_3185: '전술용 메모리 칩',
  equipNAME_31075: 'Titan 사격제어칩',
  equipNAME_32012: '白骑士制式铠甲',
  equipNAME_22013: 'MIRD5级弹药',
  equipNAME_32014: '电子义眼',
  equipNAME_32015: '机械义手',
  equipNAME_32016: '机械手臂',

  skillNAME_39: '저격개시',
  skillNAME_39_2: '하얀 사신',
  skillNAME_55: '설한의 쐐기',
  skillNAME_102: '과중부하',
  skillNAME_180: '관통사격',
  skillNAME_194: '오버히트',
  skillNAME_213: '마인드 체인',
  skillNAME_231: '거짓신의 계시',
  skillNAME_238: '게으른분노',
  skillNAME_243: '미래 예지',
  skillNAME_252: '진동 충격탄',
  skillNAME_266: '强运扳机',
  skillNAME_2006: '성화의 심판',
  skillNAME_2013: '私密改造',
  DESCRIBE_39_1: '매',
  DESCRIBE_39_2: '번 공격마다 적을 죽임',
  DESCRIBE_39_3: '사용중지',
  DESCRIBE_39_4: '저격으로 적을 죽임',
  DESCRIBE_55: '포격 모드',
  DESCRIBE_102_1: '패시브 유지',
  DESCRIBE_102_2: '액티브 사용',
  DESCRIBE_180: '모든 개체에 관통 피해 적용',
  DESCRIBE_194_0: '작동 방식',
  DESCRIBE_194_1: '모드 자동 변경',
  DESCRIBE_194_2: 'Fever모드 유지(3점사)',
  DESCRIBE_194_3: 'Note모드 유지(단발)',
  DESCRIBE_213_0: '탄환 설정',
  DESCRIBE_213_1: '아음속탄(회피 65% 상승)',
  DESCRIBE_213_2: 'ST탄(화력 85% 상승)',
  DESCRIBE_213_3: '일반탄(명중 200% 상승)',
  DESCRIBE_231: '전투 승리 횟수',
  DESCRIBE_236: '배율',
  DESCRIBE_238: '경기관총 모드',
  DESCRIBE_243_0: '발동 3초 후',
  DESCRIBE_243_1: '화력 55% 상승',
  DESCRIBE_243_2: '보호막 25 부여',
  DESCRIBE_251: '꽃의 자물쇠',
  DESCRIBE_252: '모든 개체에 범위 피해 적용',
  DESCRIBE_261: '三连击影响多少敌人',
  DESCRIBE_266_0: '持续状态',
  DESCRIBE_266_1: '攻击同一目标',
  DESCRIBE_266_2: '数次普攻切换目标',
  DESCRIBE_266_3: '次',
  DESCRIBE_2006: '대상이 스킬 범위 내에 존재',
  DESCRIBE_2013_0: '改造切换状态',
  DESCRIBE_2013_1: '纳米迷彩',

  fairy_0: '없는',
  talent_0: '없는',

  enemy_normal: '일반',
  enemy_elite: '엘리트',

  INPUT_PI: '양의 정수를 입력하십시오',

  hp: '체력',
  cs: '장탄수',
  dmg: '화력',
  rof: '사속',
  acu: '명중',
  eva: '회피',
  crit: '치명률',
  critdmg: '치명상',
  arm: '장갑',
  ap: '관통',
  cld: '쿨타임',
  night: '야간전',
  daytime: '주간전',
  form: '더미',
  na: 'Night-ability',
  skillstren: '스킬+',
  skilljill: '调制饮料改变人生',

  skillNAME_256: '석양의 송골매',
  DESCRIBE_256: '특수탄 사용 안함',

  fairyNAME_1: '용사요정',
  fairyNAME_2: '격노요정',
  fairyNAME_3: '방패요정',
  fairyNAME_4: '수호요정',
  fairyNAME_5: '방어요정',
  fairyNAME_6: '도발요정',
  fairyNAME_7: '저격요정',
  fairyNAME_8: '포격요정',
  fairyNAME_9: '공습요정',
  fairyNAME_10: '증원요정',
  fairyNAME_11: '공수요정',
  fairyNAME_12: '매설요정',
  fairyNAME_13: '로켓요정',
  fairyNAME_14: '공사요정',
  fairyNAME_15: '지휘요정',
  fairyNAME_16: '수색요정',
  fairyNAME_17: '조명요정',
  fairyNAME_18: '황금요정',
  fairyNAME_19: '취사요정',
  fairyDESCRIBE_19: '긴급배식',
  fairyDESCRIBE_19_0: '무작위의',
  fairyDESCRIBE_19_1: '매운맛(화력+20%)',
  fairyDESCRIBE_19_2: '사워(사속+20%)',
  fairyDESCRIBE_19_3: '달콤한(명중+30%)',
  fairyDESCRIBE_19_4: '짭짤한(회피+25%)',
  fairyDESCRIBE_19_5: '…화상(화력-0%)',
  fairyNAME_20: '폭죽요정',
  fairyNAME_21: '도깨비요정',

  fairyskillstr: '스킬 ',
  fairy_skillNAME_0: '없는',
  fairy_skillNAME_1: '전투효율',
  fairy_skillNAME_2: '분노폭발',
  fairy_skillNAME_3: '진압강화',
  fairy_skillNAME_4: '에너지 실드',
  fairy_skillNAME_5: '임시방호',
  fairy_skillNAME_6: '도발표적',
  fairy_skillNAME_7: '저격명령',
  fairy_skillNAME_8: '포격명령',
  fairy_skillNAME_9: '공습발령',
  fairy_skillNAME_10: '증원호출',
  fairy_skillNAME_11: '공수낙하',
  fairy_skillNAME_12: '지뢰매설',
  fairy_skillNAME_13: '터렛설치',
  fairy_skillNAME_14: '요새구축',
  fairy_skillNAME_15: '초월경험',
  fairy_skillNAME_16: '효율수색',
  fairy_skillNAME_17: '야간조명',
  fairy_skillNAME_18: '황금율법',
  fairy_skillNAME_19: '긴급배식',
  fairy_skillNAME_20: '늦여름 폭죽',
  fairy_skillNAME_21: '귀신 쫓기',

  hfNAME_0: 'BGM-71',
  hfNAME_1: 'AGS-30',
  hfNAME_2: '2B-14',
  hfNAME_3: 'M2',
  hfNAME_4: 'AT4',

  special_info_unique: '<span style="color:blue">唯一人形</span> ',
  special_info_common: '<span style="color:red">技能需要特殊设定</span>',
  special_info_2011_0: '基础饮品',
  special_info_2011_1: '<span style="color:#ff9900">∎</span><span style="color:#33cc00">∎</span><span style="color:#99ccff">∎</span>Big Beer',
  special_info_2011_2: '<span style="color:#ff3333">∎</span><span style="color:#ff3333">∎</span><span style="color:#6600ff">∎</span>Brandtini',
  special_info_2011_3: '<span style="color:#ff3333">∎</span><span style="color:#ff9900">∎</span><span style="color:#99ccff">∎</span>Piano Woman',
  special_info_2011_4: '<span style="color:#ff3333">∎</span><span style="color:#ff3333">∎</span><span style="color:#99ccff">∎</span>Moonblast',
  special_info_2011_5: '<span style="color:#ff9900">∎</span><span style="color:#6600ff">∎</span><span style="color:#33cc00">∎</span>Bleeding Jane',
  special_info_2011_6: '<span style="color:#99ccff">∎</span><span style="color:#99ccff">∎</span><span style="color:#99ccff">∎</span>Fringe Weaver'
}

var lib_special_info = new Map // 特殊提醒库
lib_special_info.set(102, lib_language.special_info_common) // ump40
lib_special_info.set(180, lib_language.special_info_common) // pzb39
lib_special_info.set(192, lib_language.special_info_common) // js05
lib_special_info.set(194, lib_language.special_info_common) // k2
lib_special_info.set(213, lib_language.special_info_common) // cms
lib_special_info.set(231, lib_language.special_info_common) // m82a1
lib_special_info.set(236, lib_language.special_info_common) // k11
lib_special_info.set(238, lib_language.special_info_common) // 88-mg
lib_special_info.set(243, lib_language.special_info_common) // 64howa
lib_special_info.set(251, lib_language.special_info_common) // x95
lib_special_info.set(252, lib_language.special_info_common) // ksvk
lib_special_info.set(256, lib_language.special_info_common) // falcon
lib_special_info.set(261, lib_language.special_info_common) // 88-rf
lib_special_info.set(266, lib_language.special_info_common) // r93
lib_special_info.set(1039, lib_language.special_info_common) // mosin
lib_special_info.set(1055, lib_language.special_info_common) // m4
lib_special_info.set(2006, lib_language.special_info_common) // theresa
lib_special_info.set(2011, lib_language.special_info_common) // jill
lib_special_info.set(2013, lib_language.special_info_common) // dorothy

window.onload = function () {
  loadScript('../js/Echelon_main.js')
  loadScript('../js/Echelon_sub.js')
  loadScript('../js/Echelon_property.js')
  loadScript('../js/Echelon_skill.js')
  loadScript('../js/Echelon_UI.js')
  loadScript('../js/Echelon_graph.js')
  loadScript('../js/Echelon_select.js')
  mergeCell('table_property', 0, 2, 0)
  mergeCell('table_affect', 0, 2, 3)
  mergeCell('table_envi', 0, 1, 0)
  mergeCell('table_envi', 0, 1, 2)
}
