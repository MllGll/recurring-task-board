const pad = (n) => String(n).padStart(2, "0");

/** Domingo da semana local que contém `date` (semana começa no domingo). */
function startOfLocalWeek(date) {
  const d = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  return d;
}

/**
 * Identificador estável do intervalo atual para cada quadro.
 * Deve coincidir com os rótulos em `periods` (Hoje, Semana, Mês, Ano).
 */
export function getCurrentBucket(period) {
  const now = new Date();
  switch (period) {
    case "Hoje":
      return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
        now.getDate()
      )}`;
    case "Semana": {
      const sunday = startOfLocalWeek(now);
      return `${sunday.getFullYear()}-${pad(sunday.getMonth() + 1)}-${pad(
        sunday.getDate()
      )}`;
    }
    case "Mês":
      return `${now.getFullYear()}-${pad(now.getMonth() + 1)}`;
    case "Ano":
      return String(now.getFullYear());
    default:
      return "";
  }
}

/**
 * Remove tarefas não fixadas do período; desmarca check nas fixadas mantidas.
 */
export function rolloverTasksForPeriod(tasks, period) {
  return tasks
    .filter((task) => task.period !== period || task.fixed === true)
    .map((task) => {
      if (task.period !== period || task.fixed !== true) return task;
      return { ...task, checked: false };
    });
}

/**
 * @param {Array} tasks
 * @param {Record<string, string>} buckets último intervalo já “fechado” por quadro
 * @param {string[]} periods
 * @returns {{ nextTasks: Array, nextBuckets: Record<string, string>, changed: boolean }}
 */
export function computeIntervalRollover(tasks, buckets, periods) {
  const nextBuckets = { ...buckets };
  let nextTasks = tasks;
  let changed = false;

  for (const period of periods) {
    const current = getCurrentBucket(period);
    if (buckets[period] === undefined) {
      if (nextBuckets[period] !== current) {
        nextBuckets[period] = current;
        changed = true;
      }
      continue;
    }
    if (buckets[period] !== current) {
      nextTasks = rolloverTasksForPeriod(nextTasks, period);
      nextBuckets[period] = current;
      changed = true;
    }
  }

  return { nextTasks, nextBuckets, changed };
}
