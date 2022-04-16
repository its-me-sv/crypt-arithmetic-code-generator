export const translations: Array<{p1: string; p2: string; p3: string; btn: string}> = [
  {p1: '加数', p2: '奥让德', p3: '和', btn: '生成代码'},
  {p1: 'Suplemento', p2: 'aumento', p3: 'Suma', btn: 'Generar codigo'},
  {p1: 'Ajouter', p2: 'Augend', p3: 'Somme', btn: 'Générer du code'},
  {p1: 'சேர்க்கை', p2: 'ஆஜெண்ட்', p3: 'தொகை', btn: 'குறியீட்டை உருவாக்கவும்'},
  {p1: 'Добавить', p2: 'Ожан', p3: 'Сумма', btn: 'Сгенерировать код'},
  {p1: '가수', p2: '어젠드', p3: '합집합', btn: '코드 생성'},
  {p1: 'الإضافة', p2: 'يبشر', p3: 'مجموع', btn: 'إنشاء التعليمات البرمجية'},
  {p1: 'Addend', p2: 'Augend', p3: 'Sum', btn: 'Generate code'},
];

export const statusText: {[key: number]: {[key: string]: string}} = {
  0: {
    '-1': '某些输入字段为空',
    '-2': '输入中超过 10 个不同的字母',
    '1': '代码已成功生成 '
  },
  1: {
    '-1': 'Algunos de los campos de entrada están vacíos',
    '-2': 'Encontrado más de 10 letras diferentes',
    '1': 'El código ha sido generado con éxito en '
  },
  2: {
    '-1': 'Certains champs de saisie sont vides',
    '-2': 'Trouvé plus de 10 lettres de district',
    '1': 'Le code a été généré avec succès dans '
  },
  3: {
    '-1': 'சில உள்ளீட்டு புலங்கள் காலியாக உள்ளன',
    '-2': '10க்கும் மேற்பட்ட வட்ட எழுத்துக்கள் கிடைத்தன',
    '1': 'குறியீடு வெற்றிகரமாக உருவாக்கப்பட்டது '
  },
  4: {
    '-1': 'Некоторые поля ввода пусты',
    '-2': 'Найдено более 10 удалённых букв',
    '1': 'Код был успешно сгенерирован в '
  },
  5: {
    '-1': '일부 입력 필드가 비어 있습니다',
    '-2': '10개 이상의 개별 문자를 찾았습니다',
    '1': '에서 코드가 성공적으로 생성되었습니다 '
  },
  6: {
    '-1': 'بعض حقول الإدخال فارغة',
    '-2': 'تم العثور على أكثر من 10 أحرف مميّزة',
    '1': 'تم إنشاء الرمز بنجاح في '
  },
  7: {
    '-1': 'Some of the input fields are empty',
    '-2': 'Found more than 10 distict letters',
    '1': 'Code has been generated successfully in '
  }
};