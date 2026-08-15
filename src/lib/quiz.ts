import { formatBirth } from "@/lib/numerology";

export type QuizAnswers = Record<string, string>;

export type FieldType = "text" | "date" | "textarea" | "radio";

export interface FieldOption {
  id: string;
  label: string;
  /** Points this option adds to each result type. */
  score?: Record<string, number>;
}

export interface QuizField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  help?: string;
  required: boolean;
  /** Lay the radio buttons out in two columns. */
  columns?: number;
  /** Include this answer in the short summary shown on /result. */
  summary?: boolean;
  options?: FieldOption[];
}

export const FIELDS: QuizField[] = [
  {
    "id": "name",
    "type": "text",
    "label": "Как вас зовут",
    "placeholder": "Имя",
    "required": true,
    "summary": true
  },
  {
    "id": "birth",
    "type": "date",
    "label": "Дата рождения",
    "help": "Нужна для расчёта числа судьбы и нумерологии карьеры.",
    "required": true,
    "summary": true
  },
  {
    "id": "profession",
    "type": "text",
    "label": "Текущая профессия",
    "placeholder": "Кем работаете сейчас или чему учитесь",
    "required": true,
    "summary": true
  },
  {
    "id": "q1",
    "type": "radio",
    "label": "1. Что в работе даёт вам больше всего энергии?",
    "required": true,
    "options": [
      {
        "id": "a",
        "label": "Разобраться в сложной задаче",
        "score": {
          "investigator": 3
        }
      },
      {
        "id": "b",
        "label": "Придумать что-то новое",
        "score": {
          "creator": 3
        }
      },
      {
        "id": "c",
        "label": "Навести порядок в хаосе",
        "score": {
          "organizer": 3
        }
      },
      {
        "id": "d",
        "label": "Помочь конкретному человеку",
        "score": {
          "helper": 3
        }
      }
    ]
  },
  {
    "id": "q2",
    "type": "radio",
    "label": "2. Что вас быстрее всего выматывает?",
    "required": true,
    "options": [
      {
        "id": "a",
        "label": "Много общения и переговоров",
        "score": {
          "investigator": 2,
          "maker": 1
        }
      },
      {
        "id": "b",
        "label": "Однообразие и регламенты",
        "score": {
          "creator": 2,
          "driver": 1
        }
      },
      {
        "id": "c",
        "label": "Неопределённость и хаос",
        "score": {
          "organizer": 3
        }
      },
      {
        "id": "d",
        "label": "Работа без видимого результата",
        "score": {
          "maker": 3
        }
      }
    ]
  },
  {
    "id": "q3",
    "type": "radio",
    "label": "3. Как вы предпочитаете работать?",
    "required": true,
    "options": [
      {
        "id": "a",
        "label": "Один, в глубоком погружении",
        "score": {
          "investigator": 3,
          "maker": 1
        }
      },
      {
        "id": "b",
        "label": "В небольшой команде",
        "score": {
          "creator": 2,
          "organizer": 1
        }
      },
      {
        "id": "c",
        "label": "С людьми весь день",
        "score": {
          "helper": 3,
          "driver": 1
        }
      },
      {
        "id": "d",
        "label": "Управляя другими",
        "score": {
          "driver": 3
        }
      }
    ]
  },
  {
    "id": "q4",
    "type": "radio",
    "label": "4. Какой результат приносит вам удовлетворение?",
    "required": true,
    "options": [
      {
        "id": "a",
        "label": "Найденный ответ или закономерность",
        "score": {
          "investigator": 3
        }
      },
      {
        "id": "b",
        "label": "Готовая вещь, которую видно и можно потрогать",
        "score": {
          "maker": 3
        }
      },
      {
        "id": "c",
        "label": "Изменившийся человек",
        "score": {
          "helper": 3
        }
      },
      {
        "id": "d",
        "label": "Выросшие цифры",
        "score": {
          "driver": 3
        }
      }
    ]
  },
  {
    "id": "q5",
    "type": "radio",
    "label": "5. Как вы принимаете решения?",
    "required": true,
    "options": [
      {
        "id": "a",
        "label": "Собираю данные и анализирую",
        "score": {
          "investigator": 3,
          "organizer": 1
        }
      },
      {
        "id": "b",
        "label": "По интуиции и ощущению",
        "score": {
          "creator": 3
        }
      },
      {
        "id": "c",
        "label": "Смотрю, как это отразится на людях",
        "score": {
          "helper": 3
        }
      },
      {
        "id": "d",
        "label": "Быстро, потом корректирую",
        "score": {
          "driver": 3
        }
      }
    ]
  },
  {
    "id": "q6",
    "type": "radio",
    "label": "6. Что вам ближе в устройстве рабочего дня?",
    "required": true,
    "options": [
      {
        "id": "a",
        "label": "Чёткий план и предсказуемость",
        "score": {
          "organizer": 3
        }
      },
      {
        "id": "b",
        "label": "Свобода и переменчивость",
        "score": {
          "creator": 2,
          "driver": 2
        }
      },
      {
        "id": "c",
        "label": "Ритм из конкретных задач с началом и концом",
        "score": {
          "maker": 3
        }
      },
      {
        "id": "d",
        "label": "Длинные периоды сосредоточенной работы",
        "score": {
          "investigator": 3
        }
      }
    ]
  },
  {
    "id": "q7",
    "type": "radio",
    "label": "7. За что вас чаще всего хвалили в жизни?",
    "required": true,
    "options": [
      {
        "id": "a",
        "label": "За внимательность и глубину",
        "score": {
          "investigator": 3
        }
      },
      {
        "id": "b",
        "label": "За идеи и вкус",
        "score": {
          "creator": 3
        }
      },
      {
        "id": "c",
        "label": "За надёжность и порядок",
        "score": {
          "organizer": 3
        }
      },
      {
        "id": "d",
        "label": "За умение договориться",
        "score": {
          "driver": 2,
          "helper": 1
        }
      }
    ]
  },
  {
    "id": "q8",
    "type": "radio",
    "label": "8. Что вы делаете, когда задача непонятна?",
    "required": true,
    "options": [
      {
        "id": "a",
        "label": "Изучаю вопрос до конца",
        "score": {
          "investigator": 3
        }
      },
      {
        "id": "b",
        "label": "Пробую сделать и смотрю, что выйдет",
        "score": {
          "maker": 3
        }
      },
      {
        "id": "c",
        "label": "Разбиваю на этапы и составляю план",
        "score": {
          "organizer": 3
        }
      },
      {
        "id": "d",
        "label": "Иду к людям и спрашиваю",
        "score": {
          "helper": 2,
          "driver": 1
        }
      }
    ]
  },
  {
    "id": "q9",
    "type": "radio",
    "label": "9. Что для вас важнее в работе?",
    "required": true,
    "options": [
      {
        "id": "a",
        "label": "Смысл и польза для людей",
        "score": {
          "helper": 3
        }
      },
      {
        "id": "b",
        "label": "Свобода самовыражения",
        "score": {
          "creator": 3
        }
      },
      {
        "id": "c",
        "label": "Стабильность и понятные правила",
        "score": {
          "organizer": 3
        }
      },
      {
        "id": "d",
        "label": "Доход и рост",
        "score": {
          "driver": 3
        }
      }
    ]
  },
  {
    "id": "q10",
    "type": "radio",
    "label": "10. Каким было ваше любимое занятие в детстве?",
    "required": true,
    "options": [
      {
        "id": "a",
        "label": "Читать, разбираться, коллекционировать",
        "score": {
          "investigator": 3
        }
      },
      {
        "id": "b",
        "label": "Рисовать, придумывать, сочинять",
        "score": {
          "creator": 3
        }
      },
      {
        "id": "c",
        "label": "Мастерить и чинить руками",
        "score": {
          "maker": 3
        }
      },
      {
        "id": "d",
        "label": "Организовывать игры и командовать",
        "score": {
          "driver": 2,
          "organizer": 1
        }
      }
    ]
  }
];

/** Radio fields start unselected on purpose — the answer has to be a real one. */
export const DEFAULTS: QuizAnswers = {};

const BY_ID = new Map(FIELDS.map((field) => [field.id, field]));

export function labelFor(fieldId: string, value: string): string {
  const field = BY_ID.get(fieldId);
  if (!field) return value;
  if (field.type === "date") return formatBirth(value);
  if (field.type !== "radio") return value;
  return field.options?.find((option) => option.id === value)?.label ?? value;
}

/** Returns the first problem found, or null when the form is ready to submit. */
export function validate(answers: QuizAnswers): string | null {
  for (const field of FIELDS) {
    if (!field.required) continue;
    const value = (answers[field.id] ?? "").trim();
    if (!value) {
      return field.type === "radio"
        ? `Выберите вариант: ${field.label}`
        : `Заполните поле: ${field.label}`;
    }
    if (field.type === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return "Укажите дату рождения полностью";
    }
  }
  return null;
}

/** Sums the per-option weights into a score for each result type. */
export function scoreAnswers(answers: QuizAnswers): Record<string, number> {
  const totals: Record<string, number> = {};
  for (const field of FIELDS) {
    if (field.type !== "radio") continue;
    const chosen = field.options?.find((option) => option.id === answers[field.id]);
    if (!chosen?.score) continue;
    for (const [type, points] of Object.entries(chosen.score)) {
      totals[type] = (totals[type] ?? 0) + points;
    }
  }
  return totals;
}

/** Every answered field, written out for the PDF. */
export function describeAnswers(answers: QuizAnswers): string[] {
  const lines: string[] = [];
  for (const field of FIELDS) {
    const value = (answers[field.id] ?? "").trim();
    if (!value) continue;
    lines.push(`${field.label}: ${labelFor(field.id, value)}`);
  }
  return lines;
}

/** The one-line version shown under the free teaser on /result. */
export function summaryAnswers(answers: QuizAnswers): string[] {
  const lines: string[] = [];
  for (const field of FIELDS) {
    if (!field.summary) continue;
    const value = (answers[field.id] ?? "").trim();
    if (!value) continue;
    lines.push(labelFor(field.id, value));
  }
  return lines;
}
