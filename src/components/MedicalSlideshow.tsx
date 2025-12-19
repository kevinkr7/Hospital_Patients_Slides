import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, BarChart3, Heart, Shield, Database, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Import all images
import heroImage from '@/assets/hero-medical-wearable.jpg';
import nurseTablet from '@/assets/nurse-tablet.jpg';
import patientPatch from '@/assets/patient-wearable-patch.jpg';
import ecgPatch from '@/assets/ecg-patch.jpg';
import medicalSmartwatch from '@/assets/medical-smartwatch.jpg';
import smartTextile from '@/assets/smart-textile.jpg';
import telemetryMonitoring from '@/assets/telemetry-monitoring.jpg';
import gaitMonitoring from '@/assets/gait-monitoring.jpg';
import fallDetection from '@/assets/fall-detection.jpg';
import cgmDevice from '@/assets/cgm-device.jpg';
import ambulatoryEcg from '@/assets/ambulatory-ecg.jpg';
import medicalAiDashboard from '@/assets/medical-ai-dashboard.jpg';
import implementationTeam from '@/assets/implementation-team.jpg';

interface SlideData {
  id: number;
  title: string;
  content: React.ReactNode;
  images?: string[];
}

const PresenterBadge = () => (
  <div className="presenter-badge absolute top-4 right-4 z-10">
    Kevin K R — III CSE A
  </div>
);

const MedicalSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const slides: SlideData[] = [
    {
      id: 1,
      title: "UNIT 5: APPLICATIONS OF WEARABLE SYSTEMS",
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
              UNIT 5: APPLICATIONS OF WEARABLE SYSTEMS
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-2">
              Hospital Patients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Overview of how wearable sensors and analytics enable continuous monitoring, improve patient safety, and support rehabilitation and chronic care inside hospitals.
            </p>
          </div>
          <img 
            src={heroImage} 
            alt="Medical wearable devices in hospital setting" 
            className="slide-image mx-auto max-w-full rounded-lg shadow-md"
          />
        </div>
      )
    },
    {
      id: 2,
      title: "Why Wearables in Hospitals?",
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Why Wearables in Hospitals?
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                <strong>Continuous Monitoring:</strong> Wearables collect continuous physiologic streams (HR, SpO₂, respiration, motion) so clinicians can see trends and transient events that periodic spot-checks miss. This continuous view helps detect deterioration earlier and supports data-driven handovers.
              </p>
              <p>
                <strong>Early Detection:</strong> Pattern-based algorithms analyze short-term trends and variability to predict deterioration (e.g., sepsis risk, respiratory compromise) earlier than fixed threshold alarms, enabling faster intervention and potentially avoiding escalations to ICU.
              </p>
              <p>
                <strong>Enhanced Mobility:</strong> Wireless patches and smartwatches let patients ambulate and participate in therapy while still being monitored, improving comfort and reducing complications associated with immobility.
              </p>
              <p>
                <strong>Operational Impact:</strong> With better triage and remote monitoring, hospitals can reduce unnecessary ICU admissions and allocate staff more effectively—improving throughput and lowering costs.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <img 
              src={nurseTablet} 
              alt="Nurse monitoring patient data on tablet" 
              className="slide-image rounded-lg"
            />
            <img 
              src={patientPatch} 
              alt="Patient wearing medical wearable patch" 
              className="slide-image rounded-lg"
            />
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Common Hospital Wearables",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">
            Common Hospital Wearables
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="slide-card p-6 text-center space-y-4 hover:scale-105 transition-transform">
              <img 
                src={ecgPatch} 
                alt="ECG patch sensor" 
                className="slide-image mx-auto h-32 w-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-primary">Patch ECG</h3>
              <p className="text-muted-foreground">Single- or multi-lead disposable patches continuously capture ECG waveforms for rhythm analysis and arrhythmia detection. Clinical adoption requires validated sampling rates, secure wireless transport, and adhesive reliability for multi-day wear.</p>
            </Card>
            <Card className="slide-card p-6 text-center space-y-4 hover:scale-105 transition-transform">
              <img 
                src={medicalSmartwatch} 
                alt="Medical smartwatch" 
                className="slide-image mx-auto h-32 w-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-primary">Medical Smartwatch</h3>
              <p className="text-muted-foreground">Smartwatches and rings provide continuous HR, SpO₂, activity and sleep metrics. They are ideal for ambulatory monitoring and post-discharge follow-up but must be clinically validated when used for diagnostic decisions.</p>
            </Card>
            <Card className="slide-card p-6 text-center space-y-4 hover:scale-105 transition-transform">
              <img 
                src={smartTextile} 
                alt="Smart textile sensors" 
                className="slide-image mx-auto h-32 w-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-primary">Smart Textiles</h3>
              <p className="text-muted-foreground">Sensorized fabrics embedded in beds or garments measure respiration, posture and pressure distribution. They support long-term comfort monitoring, pressure sore prevention and passive data capture but require careful design for washability and calibration.</p>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Real-time Vitals & Telemetry",
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Real-time Vitals & Telemetry
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-lg">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">ECG</div>
                  <div className="text-sm text-muted-foreground">Continuous rhythm & arrhythmia surveillance</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">SpO₂</div>
                  <div className="text-sm text-muted-foreground">Trend analysis for oxygenation</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">HRV</div>
                  <div className="text-sm text-muted-foreground">Autonomic function & stress indicators</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-lg">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">RR & Temp</div>
                  <div className="text-sm text-muted-foreground">Respiration and skin/ambient temperature</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Smart alerting & edge processing:</strong> Devices should denoise, reject motion artifacts and extract features on-device, sending only events or compressed summaries to reduce bandwidth and lower false alarms. Trend detection combined with clinician-configurable thresholds improves signal-to-noise in busy wards.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src={telemetryMonitoring} 
              alt="Medical telemetry monitoring system" 
              className="slide-image rounded-lg"
            />
            <p className="mt-3 text-sm text-muted-foreground">Example pipeline: sensor → edge preprocessing → event detection → secure cloud + EHR integration → clinician dashboard.</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Mobility, Rehab & Gait Monitoring",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">
            Mobility, Rehab & Gait Monitoring
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <img 
                src={gaitMonitoring} 
                alt="Gait monitoring with smart sensors" 
                className="slide-image rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <p><strong>IMU Sensors:</strong> Inertial sensors capture 3D acceleration and angular velocity to quantify step length, cadence, symmetry and sway — objective measures that can be tracked across therapy sessions.</p>
              <p><strong>Smart Shoes & Pressure Mats:</strong> Plantar pressure and phase-detection allow clinicians to see loading patterns, offloading needs and progress in weight-bearing instructions.</p>
              <p><strong>Closed-loop Feedback:</strong> Real-time cues (vibration/audio) during exercises accelerate motor relearning and can be tuned per-patient for intensity and frequency.</p>
              <Card className="slide-card p-4">
                <h4 className="font-semibold text-primary mb-2">Progress Tracking (example)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Gait Speed</span><span className="text-accent">+15%</span></div>
                  <div className="w-full bg-muted rounded-full h-2"><div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '75%'}} /></div>
                  <div className="flex justify-between"><span>Balance Score</span><span className="text-accent">+22%</span></div>
                  <div className="w-full bg-muted rounded-full h-2"><div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '88%'}} /></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Fall Detection & Patient Safety",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">
            Fall Detection & Patient Safety
          </h2>
          <div className="text-center">
            <img 
              src={fallDetection} 
              alt="Fall detection system in hospital room" 
              className="slide-image mx-auto rounded-lg"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="slide-card p-6 text-center space-y-4">
              <Shield className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Multi-modal Detection</h3>
              <p className="text-muted-foreground text-sm">Combining accelerometer/gyroscope data with pressure sensors and contextual audio (processed locally) reduces false positives while reliably detecting real falls and near-falls.</p>
            </Card>
            <Card className="slide-card p-6 text-center space-y-4">
              <Heart className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Rapid Response</h3>
              <p className="text-muted-foreground text-sm">Alerts include patient location, severity estimate and short pre-event history so nurses can triage quickly. Faster responses reduce time-to-assistance and potential complications.</p>
            </Card>
            <Card className="slide-card p-6 text-center space-y-4">
              <Database className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">EHR Integration</h3>
              <p className="text-muted-foreground text-sm">Automatic incident logging with device telemetry, clinician notes and timestamped actions supports audits and continuous quality improvement programs.</p>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Chronic Disease Management",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">
            Chronic Disease Management
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="slide-card p-6 space-y-4 hover:scale-105 transition-transform">
              <img 
                src={cgmDevice} 
                alt="Continuous glucose monitoring device" 
                className="slide-image h-32 w-full object-cover rounded-lg"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">Diabetes — CGM</h3>
                <p className="text-muted-foreground text-sm">Continuous glucose monitoring with predictive alerts and integration into decision-support can enable closed-loop insulin delivery and reduce hypoglycemia. Clinical programs use CGM to optimize time-in-range and reduce complications.</p>
              </div>
            </Card>
            <Card className="slide-card p-6 space-y-4 hover:scale-105 transition-transform">
              <img 
                src={ambulatoryEcg} 
                alt="Ambulatory ECG monitoring device" 
                className="slide-image h-32 w-full object-cover rounded-lg"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">Cardiology — Ambulatory ECG</h3>
                <p className="text-muted-foreground text-sm">Long-term patch monitoring detects intermittent arrhythmias missed by short Holter recordings; it supports risk stratification and guides therapy in outpatient settings.</p>
              </div>
            </Card>
            <Card className="slide-card p-6 space-y-4 hover:scale-105 transition-transform">
              <img 
                src={implementationTeam} 
                alt="Remote patient monitoring team" 
                className="slide-image h-32 w-full object-cover rounded-lg"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">Remote Follow-up</h3>
                <p className="text-muted-foreground text-sm">Post-discharge monitoring paired with proactive outreach lowers readmissions by catching deterioration early and supporting medication or rehab adherence.</p>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Data, AI & Privacy",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">
            Data, AI & Privacy
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p><strong>Edge AI Processing:</strong> Run denoising, feature extraction and lightweight inference on-device to reduce latency and limit raw-data transfer. This reduces bandwidth and exposure of sensitive signals.</p>
              <p><strong>Federated Learning:</strong> Train shared models using local device updates only; aggregate model weights centrally so raw patient data never leaves hospital systems.</p>
              <p><strong>Encryption & Governance:</strong> Use end-to-end encryption, role-based access, audit logs and clear consent mechanisms. Ensure clinical validation and a clinician-in-the-loop for any automated decisioning.</p>
              <p><strong>Explainability:</strong> Provide simple explanations with alerts (e.g., which features triggered the alert) to build clinician trust and enable faster triage actions.</p>

              <div className="flex justify-center gap-4 py-4">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">HIPAA</div>
                </div>
                <div className="text-center">
                  <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Secure Storage</div>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Clinical Validation</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={medicalAiDashboard} 
                alt="Medical AI data dashboard" 
                className="slide-image rounded-lg"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Implementation Roadmap & Thank You",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">
            Implementation Roadmap
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">1</div>
                  <span><strong>Pilot Program:</strong> Run a 4–12 week pilot in a single ward (20–40 beds) with defined KPIs such as sensitivity, positive predictive value and time-to-alert.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">2</div>
                  <span><strong>Clinical Validation:</strong> Conduct controlled outcome studies comparing standard care vs wearable-enabled care to measure reductions in unplanned ICU transfers, response times and length-of-stay.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">3</div>
                  <span><strong>EHR & Workflow Integration:</strong> Integrate alerts and documentation into existing nurse workflows and charts to avoid extra burden and ensure adoption.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">4</div>
                  <span><strong>Scale & Maintain:</strong> Plan device lifecycle (cleaning, charging, spares), staff training, dashboards for analytics and ongoing QA.</span>
                </div>
              </div>
              <Card className="slide-card p-6 text-center space-y-4 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="text-2xl font-bold gradient-text">Thank You!</h3>
                <p className="text-muted-foreground">
                  Kevin K R — III CSE A<br/>
                  23cs047@drngpit.ac.in
                </p>
                <div className="text-lg font-semibold text-primary">
                  Questions?
                </div>
              </Card>
            </div>
            <div>
              <img 
                src={implementationTeam} 
                alt="Implementation team working together" 
                className="slide-image rounded-lg"
              />
            </div>
          </div>
        </div>
      )
    }
  ];

  // Auto-advance functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentSlide((current) => (current + 1) % slides.length);
            return 0;
          }
          return prev + (100 / 90); // 9 seconds per slide
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // Reset progress when slide changes manually
  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          break;
        case 'ArrowRight':
          e.preventDefault();
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          break;
        case ' ':
          e.preventDefault();
          setIsPlaying((prev) => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 p-4 md:p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Progress bar */}
        {isPlaying && (
          <div className="fixed top-0 left-0 w-full h-1 bg-muted/20 z-50">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Main slide wrapper — make overflow visible so arrows can sit outside */}
        <div className="relative overflow-visible">
          {/* Keep the slide card as-is */}
          <div className="relative slide-card p-8 md:p-12 min-h-[80vh] animate-fade-in-up">
            <PresenterBadge />
            {/* Slide content */}
            <div className="animate-slide-in">
              {slides[currentSlide].content}
            </div>
          </div>

          {/* Prev arrow — now outside the card */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white hover:scale-110 transition-all shadow-lg z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Next arrow — now outside the card */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white hover:scale-110 transition-all shadow-lg z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-between mt-6 px-4">
          {/* Progress dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </span>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToSlide(0)}
              className="text-xs"
            >
              Start
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToSlide(slides.length - 1)}
              className="text-xs"
            >
              End
            </Button>
          </div>
        </div>

        {/* Keyboard shortcuts hint */}
        <div className="text-center mt-4 text-xs text-muted-foreground">
          Use ← → arrow keys to navigate • Space bar to play/pause
        </div>
      </div>
    </div>
  );
};

export default MedicalSlideshow;
