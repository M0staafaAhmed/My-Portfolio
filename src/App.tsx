import './App.css'
import { SmoothCursor } from './components/AdvancedCursor'
import { MagneticButton } from './components/MagneticButton'
import MotionBackground from './components/MotionBackground'

function App() {

  return (
    <>
      <div style={{
      height: '100vh',
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0f172a',
      direction: 'rtl'
    }}>
      <MotionBackground/>
      {/* 1. استدعاء المؤشر في الصفحة */}
      <SmoothCursor color="orange" />

      {/* 2. استدعاء الزرار الأول */}
      <MagneticButton onClick={() => alert('تم الضغط!')}>
        اشترك الآن 🚀
      </MagneticButton>

      {/* 3. استدعاء زرار تاني بألوان مختلفة */}
      <MagneticButton 
        buttonColor="#ec4899" 
        fillColor="#db2777" 
        onClick={() => console.log('زر أخر')}
      >
        تواصل معنا ✨
      </MagneticButton>
    </div>
    </>
  )
}

export default App
