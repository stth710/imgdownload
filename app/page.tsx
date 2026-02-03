'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleDownload = async () => {
    if (!url.trim()) {
      setMessage('인스타그램 URL을 입력해주세요.')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      // 여기에 실제 다운로드 로직을 구현할 수 있습니다
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage('다운로드 기능은 곧 구현될 예정입니다.')
    } catch (error) {
      setMessage('오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>인스타그램 이미지 다운로드</h1>
        <p className={styles.description}>
          인스타그램 게시물 URL을 입력하면 이미지를 다운로드할 수 있습니다.
        </p>

        <div className={styles.inputGroup}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.instagram.com/p/..."
            className={styles.input}
            disabled={loading}
          />
          <button
            onClick={handleDownload}
            className={styles.button}
            disabled={loading}
          >
            {loading ? '처리 중...' : '다운로드'}
          </button>
        </div>

        {message && (
          <div className={styles.message}>
            {message}
          </div>
        )}

        <div className={styles.features}>
          <h2 className={styles.featuresTitle}>주요 기능</h2>
          <ul className={styles.featuresList}>
            <li>인스타그램 게시물 이미지 다운로드</li>
            <li>고화질 이미지 지원</li>
            <li>빠른 다운로드 속도</li>
            <li>간편한 사용법</li>
          </ul>
        </div>
      </div>
    </div>
  )
}



