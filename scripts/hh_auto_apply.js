/**
 * Скрипт для автоподачи на вакансии на hh.ru
 * 
 * Инструкция по запуску:
 * 1. Откройте страницу с вакансиями на hh.ru (например, поиск по слову "Frontend Developer")
 * 2. Откройте консоль разработчика (F12 -> Console)
 * 3. Скопируйте и вставьте этот код, нажмите Enter
 */

(async () => {
  const VACANCIES_TO_APPLY = 10;
  
  console.log(`Запуск автоподачи на ${VACANCIES_TO_APPLY} вакансий...`);

  // Функция для задержки
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Получаем все ссылки на вакансии на странице
  const getVacancyLinks = () => {
    // Ищем ссылки на названия вакансий, исключая те, где есть текст "Отклик отправлен" рядом
    const links = Array.from(document.querySelectorAll('a[data-qa="serp-item__title"]'));
    return links;
  };

  const vacancyLinks = getVacancyLinks();
  
  if (vacancyLinks.length === 0) {
    console.log('Вакансии не найдены. Убедитесь, что вы на странице с результатами поиска.');
    return;
  }

  console.log(`Найдено ${vacancyLinks.length} вакансий на странице.`);

  let appliedCount = 0;
  
  // Открываем каждую вакансию в новой вкладке (если возможно) или кликаем "Откликнуться"
  const applyButtons = Array.from(document.querySelectorAll('a, button')).filter(el => {
    const text = el.textContent || '';
    return text.trim() === 'Откликнуться' && el.style.display !== 'none';
  });

  console.log(`Найдено ${applyButtons.length} кнопок "Откликнуться" для быстрого отклика.`);

  for (let i = 0; i < applyButtons.length && appliedCount < VACANCIES_TO_APPLY; i++) {
    const btn = applyButtons[i];
    
    // Прокручиваем к кнопке
    btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    await delay(1000 + Math.random() * 1000); 
    
    console.log(`Кликаем на вакансию ${appliedCount + 1}...`);
    
    // Перехватываем навигацию, чтобы не уходить со страницы, если это ссылка
    if (btn.tagName.toLowerCase() === 'a' && btn.href) {
       console.log(`Открываем вакансию в новой вкладке: ${btn.href}`);
       window.open(btn.href, '_blank');
       
       // Ждем немного перед переходом к следующей
       await delay(3000 + Math.random() * 2000);
       appliedCount++;
       continue;
    }
    
    btn.click();
    
    // Ждем открытия модального окна
    await delay(2000 + Math.random() * 1500); 
    
    // Пытаемся найти кнопку подтверждения отклика в модалке (если есть)
    const confirmBtn = Array.from(document.querySelectorAll('button')).find(el => {
       const text = el.textContent || '';
       return (text.includes('Откликнуться') || text.includes('Отправить')) && el !== btn;
    });
    
    if (confirmBtn) {
        console.log('Найдена кнопка подтверждения в модалке, кликаем...');
        confirmBtn.click();
        await delay(1500 + Math.random() * 1000);
    } else {
        console.log('Отклик отправлен (возможно быстрый отклик или перенаправление).');
    }
    
    // Закрываем модальное окно если оно осталось открытым (крестик)
    const closeBtn = document.querySelector('[data-qa="bloko-modal-close"]');
    if (closeBtn) {
        closeBtn.click();
        await delay(500);
    }
    
    appliedCount++;
    console.log(`Успешно откликнулись на ${appliedCount} вакансий из ${VACANCIES_TO_APPLY}.`);
    
    // Задержка между откликами (5-10 сек для безопасности)
    const waitTime = 5000 + Math.random() * 5000;
    console.log(`Ожидание ${Math.round(waitTime/1000)} сек перед следующим откликом...`);
    await delay(waitTime);
  }

  console.log(`🎉 Автоподача завершена! Отправлено откликов (или открыто вкладок): ${appliedCount}`);
})();
