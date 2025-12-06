import React, { useState } from 'react';
import { ChevronLeft, Home, BookOpen, Users, User, Play, CheckCircle, Share2, Bookmark, Zap, Clock, Book, ShoppingBag } from 'lucide-react';

export default function WisdomWeek1MobileApp() {
  const [activeTab, setActiveTab] = useState('overview');
  const [completedSections, setCompletedSections] = useState(['scripture']);

  const toggleComplete = (id) => {
    if (completedSections.includes(id)) {
      setCompletedSections(completedSections.filter(s => s !== id));
    } else {
      setCompletedSections([...completedSections, id]);
    }
  };

  const sections = [
    { id: 'scripture', emoji: '📖', title: 'God\'s Word', subtitle: 'The Bible', time: '15 min' },
    { id: 'trinity', emoji: '✨', title: 'The Trinity', subtitle: 'One God, Three Persons', time: '20 min' },
    { id: 'angels', emoji: '👼', title: 'Angels & Demons', subtitle: 'The Spiritual War', time: '15 min' },
    { id: 'discussion', emoji: '💬', title: 'Group Talk', subtitle: 'Connect the dots', time: '10 min' },
  ];

  // Wisdom Tree Logo Component
  const WisdomLogo = ({ size = 40 }) => (
    <div 
      className="rounded-xl overflow-hidden flex-shrink-0"
      style={{ 
        width: size, 
        height: size,
        background: 'linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <svg viewBox="0 0 40 40" style={{ width: size * 0.8, height: size * 0.8 }}>
        {/* Tree trunk */}
        <rect x="17" y="22" width="6" height="12" fill="#92400e" />
        {/* Tree canopy */}
        <ellipse cx="20" cy="16" rx="12" ry="10" fill="#15803d" />
        <ellipse cx="16" cy="14" rx="6" ry="5" fill="#22c55e" opacity="0.7" />
        {/* Roots */}
        <path d="M14 34 Q12 36 10 38" stroke="#92400e" strokeWidth="2" fill="none" />
        <path d="M26 34 Q28 36 30 38" stroke="#92400e" strokeWidth="2" fill="none" />
        {/* Glow */}
        <circle cx="20" cy="32" r="4" fill="#fbbf24" opacity="0.6" />
        {/* Open book */}
        <path d="M15 30 L20 32 L25 30 L25 34 L20 36 L15 34 Z" fill="#fef3c7" />
        <line x1="20" y1="32" x2="20" y2="36" stroke="#d97706" strokeWidth="0.5" />
      </svg>
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 p-4">
      {/* iPhone Frame */}
      <div className="relative w-full max-w-sm">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
        
        {/* Phone Screen */}
        <div className="bg-gradient-to-b from-amber-950 to-stone-900 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-black">
          {/* Status Bar */}
          <div className="px-6 pt-12 pb-3 flex justify-between items-center text-xs text-white">
            <span className="font-semibold">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-3 border border-white rounded-sm"></div>
              <div className="w-4 h-3 border border-white rounded-sm"></div>
              <div className="w-4 h-3 bg-white rounded-sm"></div>
            </div>
          </div>

          {/* Hero Header - Golden Amber Theme */}
          <div className="relative bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-600 px-6 pb-8 overflow-hidden">
            {/* Decorative elements - sun rays effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-300 opacity-30 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-200 opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <ChevronLeft className="w-6 h-6 text-white" />
                <div className="flex gap-3">
                  <Bookmark className="w-5 h-5 text-white" />
                  <Share2 className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white font-medium">
                  Week 1
                </span>
                <span className="text-white/80 text-xs">•</span>
                <span className="text-white/80 text-xs">60 min</span>
                <span className="text-white/80 text-xs">•</span>
                <span className="bg-amber-900/40 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white font-bold">
                  A-C
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: 'serif' }}>
                WISDOM
              </h1>
              <p className="text-lg font-semibold text-white/90 mb-2">
                Foundations
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                God's Word • Trinity • Angels 📖✨
              </p>
            </div>
          </div>

          {/* Content with rounded top */}
          <div className="bg-stone-50 rounded-t-3xl -mt-4 relative z-10">
            <div className="p-6 h-[500px] overflow-y-auto">
              
              {/* Tab Navigation - Amber theme */}
              <div className="flex gap-2 mb-6 bg-amber-100 p-1 rounded-2xl">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'overview' 
                      ? 'bg-white text-amber-700 shadow-sm' 
                      : 'text-amber-900/60'
                  }`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('content')}
                  className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'content' 
                      ? 'bg-white text-amber-700 shadow-sm' 
                      : 'text-amber-900/60'
                  }`}
                >
                  Content
                </button>
              </div>

              {activeTab === 'overview' && (
                <>
                  {/* Week Overview Card */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 mb-6 border border-amber-200">
                    <h3 className="font-bold text-amber-900 mb-3 text-lg">This Week's Journey</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          A
                        </div>
                        <div>
                          <p className="font-semibold text-amber-900 text-sm">The Scriptures</p>
                          <p className="text-xs text-amber-700/70">Why we can trust the Bible</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          B
                        </div>
                        <div>
                          <p className="font-semibold text-amber-900 text-sm">The Godhead (Trinity)</p>
                          <p className="text-xs text-amber-700/70">One God, three persons</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          C
                        </div>
                        <div>
                          <p className="font-semibold text-amber-900 text-sm">Angels (Fallen & Unfallen)</p>
                          <p className="text-xs text-amber-700/70">The spiritual realm revealed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Memory Verse - Golden theme */}
                  <div className="relative bg-gradient-to-br from-amber-500 to-yellow-500 rounded-3xl p-5 mb-6 overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-amber-950" />
                        <span className="text-amber-950 text-xs font-bold uppercase tracking-wide">This Week's Verse</span>
                      </div>
                      <p className="text-amber-950 font-medium text-sm leading-relaxed mb-2">
                        "The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is understanding."
                      </p>
                      <p className="text-amber-900/80 text-xs mb-4">— Proverbs 9:10</p>
                      <button className="flex items-center gap-2 bg-amber-950/20 backdrop-blur-sm text-amber-950 px-4 py-2 rounded-full text-sm font-medium">
                        <Play className="w-3 h-3" />
                        Practice with audio
                      </button>
                    </div>
                  </div>

                  {/* Video Introduction */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-amber-900 mb-3">Start Here</h3>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                      <div 
                        className="w-full aspect-video"
                        style={{ background: 'linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%)' }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-amber-600 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-white font-medium text-sm">Week 1 Overview</p>
                        <p className="text-white/80 text-xs">Pastor Brian • 4:20</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress - Amber theme */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-bold text-amber-900">Your Progress</h3>
                      <span className="text-sm text-amber-600 font-semibold">1/4 done</span>
                    </div>
                    <div className="w-full bg-amber-100 rounded-full h-3 mb-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-amber-500 to-yellow-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: '25%' }}
                      ></div>
                    </div>
                  </div>

                  {/* Lesson Sections */}
                  <h3 className="text-lg font-bold text-amber-900 mb-3">What's Inside</h3>
                  <div className="space-y-3 mb-6">
                    {sections.map((section, index) => (
                      <div 
                        key={section.id}
                        className={`rounded-2xl p-4 transition-all cursor-pointer ${
                          completedSections.includes(section.id)
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200' 
                            : 'bg-amber-50 border-2 border-amber-100'
                        }`}
                        onClick={() => toggleComplete(section.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            {completedSections.includes(section.id) ? (
                              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl text-white">
                                ✓
                              </div>
                            ) : (
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl border-2 border-amber-200">
                                {section.emoji}
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold text-amber-900 text-sm">{section.title}</h4>
                              <p className="text-xs text-amber-700/60">{section.subtitle}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <Clock className="w-3 h-3 text-amber-400" />
                                <span className="text-xs text-amber-600">{section.time}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-amber-400">→</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons - Amber theme */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-amber-950 py-4 rounded-2xl font-bold text-base shadow-lg">
                      Start Week 1 🚀
                    </button>
                    <button className="w-full bg-amber-100 text-amber-800 py-4 rounded-2xl font-semibold text-base">
                      Download Study Guide
                    </button>
                  </div>
                </>
              )}

              {activeTab === 'content' && (
                <>
                  {/* Scripture Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center text-white font-bold">
                        A
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-amber-900">The Scriptures</h3>
                        <p className="text-sm text-amber-700/70">God's inspired Word</p>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-4 mb-4">
                      <p className="text-sm text-amber-900 leading-relaxed">
                        <strong className="text-amber-800">Key Truth:</strong> The Bible is God-breathed, 
                        written by men moved by the Holy Spirit. It's our ultimate authority for faith and life.
                      </p>
                    </div>

                    <div className="bg-white border border-amber-200 rounded-xl p-4 mb-3">
                      <p className="text-xs font-bold text-amber-600 uppercase mb-2">Key Verses</p>
                      <p className="text-sm text-amber-900 mb-2">
                        <strong>2 Peter 1:21</strong> - Holy men of God spoke as they were moved by the Holy Spirit.
                      </p>
                      <p className="text-sm text-amber-900 mb-2">
                        <strong>2 Timothy 3:16-17</strong> - All Scripture is given by inspiration of God (God-breathed).
                      </p>
                      <p className="text-sm text-amber-900">
                        <strong>1 Corinthians 2:13</strong> - Words taught by the Spirit, not by human wisdom.
                      </p>
                    </div>

                    <details className="bg-amber-50 rounded-xl p-4 mb-2">
                      <summary className="font-semibold text-amber-900 cursor-pointer text-sm">
                        📝 What does "inspired" mean?
                      </summary>
                      <p className="text-sm text-amber-800/80 mt-2 leading-relaxed">
                        God-breathed (2 Tim 3:16-17). The Holy Spirit moved holy men to write the very 
                        words of Scripture—not from human wisdom, but from the Spirit (1 Cor 2:13).
                      </p>
                    </details>
                  </div>

                  {/* Trinity Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-800 rounded-2xl flex items-center justify-center text-white font-bold">
                        B
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-amber-900">The Trinity</h3>
                        <p className="text-sm text-amber-700/70">One God, three persons</p>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-600 rounded-lg p-4 mb-4">
                      <p className="text-sm text-amber-900 leading-relaxed">
                        <strong className="text-amber-800">Key Truth:</strong> God exists eternally as Father, 
                        Son, and Holy Spirit—three distinct persons, yet one God.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-5 mb-4">
                      <div className="text-center mb-3">
                        <p className="text-2xl font-black text-amber-900 mb-2">GOD</p>
                        <p className="text-xs text-amber-700 font-semibold">One Essence</p>
                      </div>
                      <div className="flex justify-around">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 shadow-md">
                            <span className="text-xl">👨</span>
                          </div>
                          <p className="text-xs font-bold text-amber-900">Father</p>
                        </div>
                        <div className="text-center">
                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 shadow-md">
                            <span className="text-xl">✝️</span>
                          </div>
                          <p className="text-xs font-bold text-amber-900">Son</p>
                        </div>
                        <div className="text-center">
                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 shadow-md">
                            <span className="text-xl">🕊️</span>
                          </div>
                          <p className="text-xs font-bold text-amber-900">Spirit</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-amber-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-amber-600 uppercase mb-2">Key Verses</p>
                      <p className="text-sm text-amber-900 mb-1">• <strong>Genesis 1:1</strong> - In the beginning God [Elohim]</p>
                      <p className="text-sm text-amber-900 mb-1">• <strong>Genesis 1:26</strong> - "Let Us make man..."</p>
                      <p className="text-sm text-amber-900 mb-1">• <strong>Matthew 28:19</strong> - Baptize in the name of...</p>
                      <p className="text-sm text-amber-900">• <strong>1 John 5:7</strong> - "These three are one"</p>
                    </div>
                  </div>

                  {/* Angels Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-800 to-amber-900 rounded-2xl flex items-center justify-center text-white font-bold">
                        C
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-amber-900">Angels & Demons</h3>
                        <p className="text-sm text-amber-700/70">The spiritual realm</p>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-700 rounded-lg p-4 mb-4">
                      <p className="text-sm text-amber-900 leading-relaxed">
                        <strong className="text-amber-800">Key Truth:</strong> God created angels as spiritual beings. 
                        Some fell with Satan, others remained faithful and serve God.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                        <p className="text-xl mb-1 text-center">😇</p>
                        <p className="font-bold text-green-900 text-xs mb-1">Unfallen Angels</p>
                        <p className="text-xs text-green-700">Serve God & believers</p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                        <p className="text-xl mb-1 text-center">👹</p>
                        <p className="font-bold text-red-900 text-xs mb-1">Fallen Angels</p>
                        <p className="text-xs text-red-700">Satan & demons</p>
                      </div>
                    </div>

                    <div className="bg-white border border-amber-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-amber-600 uppercase mb-2">Key Passages</p>
                      <p className="text-sm text-amber-900 mb-1">• <strong>Isaiah 14:12-15</strong> - Satan's fall</p>
                      <p className="text-sm text-amber-900 mb-1">• <strong>Ezekiel 28:11-19</strong> - His description</p>
                      <p className="text-sm text-amber-900 mb-1">• <strong>Hebrews 1:14</strong> - Angels minister to us</p>
                      <p className="text-sm text-amber-900">• <strong>Revelation 20:10</strong> - Satan's final judgment</p>
                    </div>
                  </div>
                </>
              )}

            </div>

            {/* Bottom Navigation - Amber theme */}
            <div className="border-t border-amber-100 bg-white/95 backdrop-blur-lg flex justify-around py-4">
              <button className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-amber-950" />
                </div>
                <span className="text-xs font-semibold text-amber-700">Home</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-xs text-amber-500">Weeks</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-xs text-amber-500">Apparel</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-xs text-amber-500">Squad</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <User className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-xs text-amber-500">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
