# Решение проблемы с push на GitHub

## Проблема
Ошибка `HTTP 400` и `the remote end hung up unexpectedly` при push больших файлов (видео ~48MB).

## Решения

### Решение 1: Установить Git LFS (рекомендуется)

**Установка:**
```bash
# На Mac через Homebrew
brew install git-lfs

# Или скачать с https://git-lfs.github.com/
```

**Настройка:**
```bash
# Инициализация Git LFS
git lfs install

# Добавить большие файлы в LFS
git lfs track "*.mp4"
git lfs track "*.mov"

# Добавить .gitattributes в коммит
git add .gitattributes
git commit -m "Add Git LFS tracking for video files"
```

**Переместить существующие файлы в LFS:**
```bash
# Создать новый коммит с LFS
git rm --cached public/projects/me1.mp4
git rm --cached public/works/lkneo/mobile.mp4
git add public/projects/me1.mp4
git add public/works/lkneo/mobile.mp4
git commit -m "Move large videos to Git LFS"

# Теперь push должен работать
git push origin main
```

---

### Решение 2: Использовать GitHub Desktop

1. Откройте GitHub Desktop
2. Выберите репозиторий `fili-portfolio`
3. Нажмите "Push origin" в верхней панели
4. GitHub Desktop лучше обрабатывает большие файлы

---

### Решение 3: Разбить push на части (временное решение)

Если нужно быстро запушить код без больших видео:

```bash
# Удалить большие файлы из последнего коммита (сохранить в истории)
git reset --soft HEAD~1

# Удалить большие файлы из staging
git reset HEAD public/projects/me1.mp4
git reset HEAD public/works/lkneo/mobile.mp4

# Закоммитить код без больших файлов
git commit -m "Add new project pages (without large videos)"

# Запушить код
git push origin main

# Потом добавить видео отдельным коммитом (после настройки LFS)
```

---

### Решение 4: Использовать SSH (если настроен)

```bash
# Проверить SSH ключ
ssh -T git@github.com

# Если работает, переключить remote на SSH
git remote set-url origin git@github.com:filipasegor/fili-portfolio.git
git push origin main
```

---

## Рекомендация

Лучше всего использовать **Git LFS** для видеофайлов, так как:
- GitHub имеет ограничения на размер файлов (>50MB требует LFS)
- LFS оптимизирован для бинарных файлов
- Не будет проблем с push в будущем

