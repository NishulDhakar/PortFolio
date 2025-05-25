interface PhysicalSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  className?: string;
}

export default function PhysicalSwitch ({ isOn, onToggle, className = "" }: PhysicalSwitchProps) {
  return (
    <div className={`inline-block ${className}`}>
      <div className="relative w-20 h-20 group cursor-pointer" onClick={onToggle}>
        <div className={`absolute inset-0 rounded-full transition-all duration-700 ${isOn ? 'animate-spin' : ''}`}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full transition-all duration-500`}
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-35px)`,
                transitionDelay: `${i * 100}ms`
              }}
            >
              <div className={`w-1 h-1 rounded-full ${isOn ? 'bg-cyan-400 shadow-cyan-400 shadow-lg animate-pulse' : 'bg-gray-600 opacity-40'}`}></div>
            </div>
          ))}
        </div>
        {isOn && (
          <>
            <div className="absolute inset-2 rounded-full border border-cyan-400/30 animate-ping"></div>
            <div className="absolute inset-4 rounded-full border border-blue-400/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </>
        )}

        <div className={`
          absolute inset-3 rounded-full transition-all duration-500 group-hover:scale-110 group-active:scale-95
          ${isOn 
            ? 'bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl shadow-cyan-500/50' 
            : 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-lg shadow-black/50'
          }
        `}>

          <div className={`
            absolute inset-1 rounded-full transition-all duration-700
            ${isOn 
              ? 'bg-gradient-to-br from-white/20 to-transparent animate-pulse' 
              : 'bg-gradient-to-br from-gray-600/10 to-transparent'
            }
          `}></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`
              relative w-4 h-4 transition-all duration-300
              ${isOn ? 'text-white' : 'text-gray-400'}
            `}>

              <div className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${isOn ? 'border-white/80' : 'border-gray-400/60'}`}></div>
              <div className={`absolute top-0 left-1/2 w-0.5 h-2 transform -translate-x-1/2 transition-all duration-300 ${isOn ? 'bg-white' : 'bg-gray-400'}`}></div>
            </div>
          </div>

          {isOn && (
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-60"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>

        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-full transition-all duration-500
          ${isOn 
            ? 'bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-lg shadow-cyan-400/40' 
            : 'bg-gradient-to-r from-transparent via-gray-600/30 to-transparent'
          }`}></div>

        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full transition-all duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-1 h-1 rounded-full ${isOn ? 'bg-cyan-400 shadow-cyan-400 shadow-sm' : 'bg-gray-600 opacity-50'}`}></div>
            </div>
          ))}
        </div>

        {isOn && (
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-xl animate-pulse"></div>
        )}

      </div>
    </div>
  );
};
