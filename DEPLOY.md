# Инструкция по деплою на Vercel

## Через веб-интерфейс (рекомендуется)

1. **Подготовка:**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Деплой:**
   - Перейдите на https://vercel.com
   - Войдите через GitHub
   - Нажмите "Add New..." → "Project"
   - Импортируйте репозиторий `fili-portfolio`
   - Vercel автоматически определит Next.js
   - Нажмите "Deploy"

3. **Настройка кастомного домена:**
   - В проекте: Settings → Domains
   - Введите ваш домен (например, `yourdomain.com`)
   - Добавьте DNS-записи:
     - **CNAME:** `www.yourdomain.com` → `cname.vercel-dns.com`
     - Или **A-запись:** `yourdomain.com` → IP-адреса Vercel (указаны в интерфейсе)

## Через Vercel CLI

1. **Установка CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Деплой:**
   ```bash
   vercel
   ```
   Следуйте инструкциям в терминале.

3. **Добавление кастомного домена:**
   ```bash
   vercel domains add yourdomain.com
   ```
   Затем настройте DNS-записи в панели управления доменом.

## Переменные окружения (если нужны)

Если проект использует переменные окружения:
1. Settings → Environment Variables
2. Добавьте необходимые переменные (например, API keys)
3. Передеплойте проект

## Автоматический деплой

После первого деплоя:
- Каждый push в `main` автоматически деплоится в production
- Push в другие ветки создает preview deployment

