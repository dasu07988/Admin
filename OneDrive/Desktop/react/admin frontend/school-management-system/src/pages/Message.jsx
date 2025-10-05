import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import Footer from '../components/Footer';

const Message = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageText, setMessageText] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Mrs. Wijasuriya (Parent)',
      lastMessage: 'Thank you for the update',
      time: '10:30 AM',
      unread: 2,
      avatar: 'https://ui-avatars.com/api/?name=Mrs+Wijasuriya&background=f97316&color=fff'
    },
    {
      id: 2,
      name: 'Mr. Perera (Parent)',
      lastMessage: 'When is the next meeting?',
      time: '09:15 AM',
      unread: 0,
      avatar: 'https://ui-avatars.com/api/?name=Mr+Perera&background=3b82f6&color=fff'
    },
    {
      id: 3,
      name: 'Mrs. Karunaratne (Teacher)',
      lastMessage: 'Class schedule updated',
      time: 'Yesterday',
      unread: 1,
      avatar: 'https://ui-avatars.com/api/?name=Mrs+Karunaratne&background=10b981&color=fff'
    }
  ];

  const getMessagesForChat = (chatId) => {
    if (!chatId) return [];
    
    // Mock messages based on chat ID
    const messageData = {
      1: [
        {
          id: 1,
          sender: 'Mrs. Jayawardhana',
          text: 'Hello, I wanted to ask about my child\'s progress',
          time: '10:25 AM',
          isOwn: false
        },
        {
          id: 2,
          sender: 'You',
          text: 'Hello! Your child is doing great. I\'ll send you a detailed report.',
          time: '10:28 AM',
          isOwn: true
        },
        {
          id: 3,
          sender: 'Mrs. Jayawardhana',
          text: 'Thank you for the update',
          time: '10:30 AM',
          isOwn: false
        }
        


      ],
      2: [
        {
          id: 1,
          sender: 'Mr. Perera',
          text: 'When is the next meeting?',
          time: '09:15 AM',
          isOwn: false
        }
      ],
      3: [
        {
          id: 1,
          sender: 'Mrs. Karunaratne',
          text: 'Class schedule updated',
          time: 'Yesterday',
          isOwn: false
        }
      ],
      4: [
        {
          id: 1,
          sender: 'Mrs. Wijesuriya',
          text: 'Class rescheduled to 2 PM tomorrow.',
          time: '12:12 PM',
          isOwn: false
        }
      ]
    };
    
    return messageData[chatId] || [];
  };

  const handleSendMessage = () => {
    if (messageText.trim() && selectedChat) {
      console.log(`Sending message to chat ${selectedChat.id}: ${messageText}`);
      setMessageText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className="flex flex-col flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 flex overflow-hidden">
          {/* Chat List Sidebar */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">Messages</h2>
              <input
                type="text"
                placeholder="Search conversations..."
                className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition ${
                    selectedChat?.id === chat.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {chat.name}
                        </h3>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-600 truncate">
                          {chat.lastMessage}
                        </p>
                        {chat.unread > 0 && (
                          <span className="ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-gray-50">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="bg-white border-b border-gray-200 p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedChat.avatar}
                      alt={selectedChat.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {selectedChat.name}
                      </h3>
                      <p className="text-sm text-green-500">Online</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {getMessagesForChat(selectedChat.id).map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isOwn
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-900'
                        }`}
                      >
                        {!message.isOwn && (
                          <p className="text-xs font-semibold mb-1">
                            {message.sender}
                          </p>
                        )}
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.isOwn ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="bg-white border-t border-gray-200 p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No conversation selected
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose a conversation from the list to start messaging
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Message; 