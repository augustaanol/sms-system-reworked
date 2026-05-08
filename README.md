# SMS API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()

**SMS API** to nowoczesne i lekkie narzędzie stworzone do łatwej integracji z bramkami SMS (w tym aplikacją SMS Gateway pozwalającą zmienić Twój telefon we własną bramkę SMS). Projekt upraszcza proces wysyłania, odbierania oraz monitorowania statusu wiadomości SMS, udostępniając przyjazny interfejs programistyczny.

## Główne funkcje

- **Szybka wysyłka:** Obsługa pojedynczych oraz masowych wiadomości SMS.
- **Statusy doręczeń (Delivery Reports):** Śledzenie, czy wiadomość dotarła do odbiorcy.
- **Obsługa Webhooków:** Odbieranie powiadomień przychodzących i odpowiedzi od użytkowników (2-way SMS).
- **Walidacja i normalizacja:** Automatyczna poprawa formatu numerów telefonów i usuwanie znaków specjalnych.

## Wymagania

- Node.js 16+
- Python 3.9+
- Aktywne konto u operatora usług SMS (np. SMSAPI, Twilio, MessageBird) oraz klucz dostępu (API Key).

## Instalacja

Pobierz repozytorium na swój dysk lokalny:

```bash
git clone [https://github.com/augustaanol/sms-api.git](https://github.com/augustaanol/sms-api.git)
cd sms-api
