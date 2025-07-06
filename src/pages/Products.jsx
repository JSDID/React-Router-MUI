import { useRoutes, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  CardMedia,
  Chip,
  Rating,
  Stack
} from '@mui/material';
import {
  Inventory as InventoryIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';

// Компоненты для вложенных маршрутов
function ProductList() {
  const navigate = useNavigate();
  
  const products = [
    { 
      id: 1, 
      name: 'Смартфон Galaxy Pro', 
      description: 'Современный смартфон с мощным процессором, 6.7" AMOLED экраном и камерой 108 МП. Идеально подходит для работы и развлечений.',
      price: '25,999₴',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
      category: 'Электроника',
      rating: 4.8,
      features: ['6.7" AMOLED экран', '108 МП камера', '5000 мАч батарея', '5G поддержка']
    },
    { 
      id: 2, 
      name: 'Ноутбук UltraBook', 
      description: 'Легкий и мощный ноутбук для профессионалов. Intel i7, 16GB RAM, SSD 512GB. Отличная производительность в тонком корпусе.',
      price: '45,999₴',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      category: 'Компьютеры',
      rating: 4.9,
      features: ['Intel i7', '16GB RAM', '512GB SSD', '13.3" Retina дисплей']
    },
    { 
      id: 3, 
      name: 'Беспроводные наушники', 
      description: 'Премиальные наушники с активным шумоподавлением и превосходным звуком. До 30 часов автономной работы.',
      price: '3,999₴',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      category: 'Аудио',
      rating: 4.7,
      features: ['Активное шумоподавление', '30 часов работы', 'Bluetooth 5.0', 'Водостойкость']
    },
    { 
      id: 4, 
      name: 'Умные часы Sport', 
      description: 'Спортивные часы с GPS, мониторингом сердечного ритма и множеством спортивных режимов. Водонепроницаемые.',
      price: '8,999₴',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      category: 'Гаджеты',
      rating: 4.6,
      features: ['GPS навигация', 'Мониторинг пульса', 'Водонепроницаемость', '7 дней автономности']
    },
    { 
      id: 5, 
      name: '4K Телевизор Smart', 
      description: 'Умный телевизор с 4K разрешением, HDR и встроенными приложениями. Идеально для домашнего кинотеатра.',
      price: '32,999₴',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
      category: 'ТВ и видео',
      rating: 4.8,
      features: ['4K Ultra HD', 'HDR поддержка', 'Smart TV', '55" экран']
    },
    { 
      id: 6, 
      name: 'Игровая консоль', 
      description: 'Мощная игровая консоль нового поколения с поддержкой 4K игр и молниеносной загрузкой.',
      price: '18,999₴',
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=300&fit=crop',
      category: 'Игры',
      rating: 4.9,
      features: ['4K игровая графика', 'SSD накопитель', 'Ray Tracing', 'Backward compatibility']
    },
    { 
      id: 7, 
      name: 'Беспроводная мышь Pro', 
      description: 'Эргономичная игровая мышь с высокоточным сенсором 25,600 DPI и RGB подсветкой. До 70 часов работы.',
      price: '2,499₴',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
      category: 'Периферия',
      rating: 4.7,
      features: ['25,600 DPI сенсор', 'RGB подсветка', '70 часов работы', '11 программируемых кнопок']
    },
    { 
      id: 8, 
      name: 'Механическая клавиатура', 
      description: 'Профессиональная механическая клавиатура с переключателями Cherry MX Blue и алюминиевым корпусом.',
      price: '4,999₴',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
      category: 'Периферия',
      rating: 4.8,
      features: ['Cherry MX Blue', 'Алюминиевый корпус', 'RGB подсветка', 'PBT клавиши']
    }
  ];

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ mt: { xs: 2, sm: 4 }, mb: { xs: 2, sm: 4 } }}>
          <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <InventoryIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
            <Typography variant="h4" component="h1">
              Наши продукты
            </Typography>
          </Box>
          
          <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
            {products.map((product) => (
              <Grid item key={product.id}>
                <Card elevation={3} sx={{ 
                  width: 400, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  maxWidth: { xs: '100%', sm: 400 }
                }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                              <Typography 
                          variant="h6" 
                          component="h2" 
                          gutterBottom
                          sx={{ 
                            fontSize: '1.25rem',
                            fontWeight: 'bold'
                          }}
                        >
                        {product.name}
                      </Typography>
                      <Chip 
                        label={product.category} 
                        size="small" 
                        color="primary" 
                        variant="outlined"
                        sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Rating 
                        value={product.rating} 
                        precision={0.1} 
                        size="small" 
                        readOnly 
                        sx={{ mr: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {product.rating}
                      </Typography>
                    </Box>
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      paragraph
                      sx={{ 
                        fontSize: '0.875rem',
                        lineHeight: 1.4,
                        mb: 2
                      }}
                    >
                      {product.description}
                    </Typography>
                    
                    <Stack direction="row" spacing={0.5} sx={{ mb: 2, flexWrap: 'wrap' }}>
                      {product.features.slice(0, 2).map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature}
                          size="small"
                          variant="outlined"
                          sx={{ 
                            fontSize: { xs: '0.65rem', sm: '0.7rem' },
                            mb: 0.5
                          }}
                        />
                      ))}
                    </Stack>
                    
                    <Typography 
                      variant="h6" 
                      color="primary"
                      sx={{ 
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        mb: 2
                      }}
                    >
                      {product.price}
                    </Typography>
                  </CardContent>
                                    <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button 
                      variant="contained"
                      fullWidth
                      onClick={() => navigate(`/products/${product.id}`)}
                      sx={{ 
                        fontSize: '0.875rem',
                        py: 1.5
                      }}
                    >
                      Подробнее
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
    </Box>
  );
}

function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const productId = parseInt(location.pathname.split('/').pop());
  
  // Находим продукт по ID
  const allProducts = [
    { 
      id: 1, 
      name: 'Смартфон Galaxy Pro', 
      description: 'Современный смартфон с мощным процессором, 6.7" AMOLED экраном и камерой 108 МП. Идеально подходит для работы и развлечений.',
      fullDescription: 'Galaxy Pro - это флагманский смартфон, который сочетает в себе передовые технологии и элегантный дизайн. Устройство оснащено самым мощным процессором на рынке, который обеспечивает молниеносную работу всех приложений и игр. 6.7-дюймовый AMOLED экран с разрешением 3200x1440 пикселей и частотой обновления 120 Гц обеспечивает невероятно четкое и плавное изображение. Основная камера с разрешением 108 МП позволяет делать профессиональные фотографии, а система стабилизации гарантирует четкие снимки даже в движении.',
      price: '25,999₴',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
      category: 'Электроника',
      rating: 4.8,
      features: ['6.7" AMOLED экран', '108 МП камера', '5000 мАч батарея', '5G поддержка', '120 Гц экран', 'IP68 защита'],
      specs: {
        'Экран': '6.7" AMOLED, 3200x1440, 120 Гц',
        'Процессор': 'Snapdragon 8 Gen 2',
        'Память': '256 ГБ',
        'RAM': '12 ГБ',
        'Батарея': '5000 мАч',
        'Камера': '108 МП + 12 МП + 10 МП'
      }
    },
    { 
      id: 2, 
      name: 'Ноутбук UltraBook', 
      description: 'Легкий и мощный ноутбук для профессионалов. Intel i7, 16GB RAM, SSD 512GB. Отличная производительность в тонком корпусе.',
      fullDescription: 'UltraBook - это идеальное сочетание мощности и портативности. Ноутбук оснащен процессором Intel Core i7 12-го поколения, который обеспечивает исключительную производительность для любых задач. 16 ГБ оперативной памяти DDR5 и SSD накопитель объемом 512 ГБ гарантируют быструю работу системы и мгновенную загрузку приложений. 13.3-дюймовый Retina дисплей с разрешением 2560x1600 пикселей обеспечивает кристально четкое изображение, а встроенная графика Intel Iris Xe справляется с большинством задач.',
      price: '45,999₴',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop',
      category: 'Компьютеры',
      rating: 4.9,
      features: ['Intel i7', '16GB RAM', '512GB SSD', '13.3" Retina дисплей', 'Thunderbolt 4', 'Wi-Fi 6E'],
      specs: {
        'Процессор': 'Intel Core i7-1260P',
        'RAM': '16 ГБ DDR5',
        'Накопитель': '512 ГБ SSD',
        'Экран': '13.3" Retina, 2560x1600',
        'Графика': 'Intel Iris Xe',
        'Вес': '1.2 кг'
      }
    },
    { 
      id: 3, 
      name: 'Беспроводные наушники', 
      description: 'Премиальные наушники с активным шумоподавлением и превосходным звуком. До 30 часов автономной работы.',
      fullDescription: 'Эти беспроводные наушники представляют собой вершину аудио технологий. Активное шумоподавление последнего поколения блокирует до 95% внешних шумов, позволяя полностью погрузиться в музыку. Динамики с диафрагмой из титана обеспечивают кристально чистый звук с глубокими басами и четкими высокими частотами. Bluetooth 5.0 обеспечивает стабильное соединение на расстоянии до 10 метров. Водонепроницаемость IPX4 позволяет использовать наушники во время тренировок.',
      price: '3,999₴',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
      category: 'Аудио',
      rating: 4.7,
      features: ['Активное шумоподавление', '30 часов работы', 'Bluetooth 5.0', 'Водостойкость', 'Touch управление', 'Голосовой помощник'],
      specs: {
        'Тип': 'Беспроводные накладные',
        'Bluetooth': '5.0',
        'Время работы': '30 часов',
        'Зарядка': 'USB-C',
        'Водостойкость': 'IPX4',
        'Вес': '250 г'
      }
    },
    { 
      id: 4, 
      name: 'Умные часы Sport', 
      description: 'Спортивные часы с GPS, мониторингом сердечного ритма и множеством спортивных режимов. Водонепроницаемые.',
      fullDescription: 'Sport Watch - это идеальный компаньон для активного образа жизни. Встроенный GPS модуль обеспечивает точное отслеживание маршрутов и расстояний. Датчик сердечного ритма работает 24/7, отслеживая изменения пульса и предупреждая о возможных проблемах со здоровьем. Более 50 спортивных режимов позволяют точно отслеживать различные виды активности. Водонепроницаемость 5 ATM позволяет использовать часы для плавания.',
      price: '8,999₴',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
      category: 'Гаджеты',
      rating: 4.6,
      features: ['GPS навигация', 'Мониторинг пульса', 'Водонепроницаемость', '7 дней автономности', '50+ спортивных режимов', 'Уведомления'],
      specs: {
        'Экран': '1.4" AMOLED',
        'GPS': 'Встроенный',
        'Водонепроницаемость': '5 ATM',
        'Батарея': '7 дней',
        'Спортивные режимы': '50+',
        'Вес': '45 г'
      }
    },
    { 
      id: 5, 
      name: '4K Телевизор Smart', 
      description: 'Умный телевизор с 4K разрешением, HDR и встроенными приложениями. Идеально для домашнего кинотеатра.',
      fullDescription: 'Этот 4K Smart TV открывает новый уровень домашних развлечений. Разрешение 3840x2160 пикселей обеспечивает невероятную детализацию изображения, а технология HDR10+ делает цвета более яркими и реалистичными. Встроенная операционная система предоставляет доступ к тысячам приложений и стриминговых сервисов. Процессор AI обеспечивает автоматическую оптимизацию изображения и звука в зависимости от контента.',
      price: '32,999₴',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop',
      category: 'ТВ и видео',
      rating: 4.8,
      features: ['4K Ultra HD', 'HDR поддержка', 'Smart TV', '55" экран', 'AI процессор', 'Dolby Atmos'],
      specs: {
        'Размер экрана': '55"',
        'Разрешение': '4K Ultra HD (3840x2160)',
        'HDR': 'HDR10+, Dolby Vision',
        'Звук': 'Dolby Atmos',
        'Smart TV': 'Android TV',
        'Порты': '4x HDMI 2.1'
      }
    },
    { 
      id: 6, 
      name: 'Игровая консоль', 
      description: 'Мощная игровая консоль нового поколения с поддержкой 4K игр и молниеносной загрузкой.',
      fullDescription: 'Новейшая игровая консоль представляет собой революцию в игровой индустрии. Кастомный процессор обеспечивает невероятную производительность, позволяя запускать игры в разрешении 4K с частотой 60 FPS. SSD накопитель обеспечивает молниеносную загрузку игр и практически мгновенные переходы между уровнями. Технология Ray Tracing создает реалистичное освещение и отражения в реальном времени.',
      price: '18,999₴',
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop',
      category: 'Игры',
      rating: 4.9,
      features: ['4K игровая графика', 'SSD накопитель', 'Ray Tracing', 'Backward compatibility', '120 FPS поддержка', '8K готовность'],
      specs: {
        'Процессор': 'Кастомный 8-ядерный',
        'Графика': 'RDNA 2 архитектура',
        'Память': '16 ГБ GDDR6',
        'Накопитель': '1 ТБ SSD',
        '4K': 'До 120 FPS',
        'Ray Tracing': 'Поддержка'
      }
    },
    { 
      id: 7, 
      name: 'Беспроводная мышь Pro', 
      description: 'Эргономичная игровая мышь с высокоточным сенсором 25,600 DPI и RGB подсветкой. До 70 часов работы.',
      fullDescription: 'Беспроводная мышь Pro - это идеальный выбор для геймеров и профессионалов. Высокоточный сенсор с разрешением 25,600 DPI обеспечивает невероятную точность и отзывчивость. Эргономичный дизайн с мягкими накладками обеспечивает комфортную работу даже в течение длительного времени. RGB подсветка с 16.8 миллионами цветов позволяет настроить внешний вид под свой вкус. 11 программируемых кнопок дают возможность настроить управление под любую игру или приложение.',
      price: '2,499₴',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop',
      category: 'Периферия',
      rating: 4.7,
      features: ['25,600 DPI сенсор', 'RGB подсветка', '70 часов работы', '11 программируемых кнопок', 'Эргономичный дизайн', 'Беспроводное соединение'],
      specs: {
        'Сенсор': '25,600 DPI',
        'Подключение': '2.4 ГГц беспроводное',
        'Время работы': '70 часов',
        'Кнопки': '11 программируемых',
        'RGB': '16.8 млн цветов',
        'Вес': '95 г'
      }
    },
    { 
      id: 8, 
      name: 'Механическая клавиатура', 
      description: 'Профессиональная механическая клавиатура с переключателями Cherry MX Blue и алюминиевым корпусом.',
      fullDescription: 'Эта механическая клавиатура представляет собой вершину качества и комфорта. Переключатели Cherry MX Blue обеспечивают тактильную обратную связь и характерный звук, который так любят энтузиасты. Алюминиевый корпус не только выглядит премиально, но и обеспечивает отличную стабильность и долговечность. PBT клавиши устойчивы к износу и не теряют свои свойства со временем. RGB подсветка с множеством эффектов позволяет создать уникальную атмосферу.',
      price: '4,999₴',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop',
      category: 'Периферия',
      rating: 4.8,
      features: ['Cherry MX Blue', 'Алюминиевый корпус', 'RGB подсветка', 'PBT клавиши', 'Полноразмерная', 'USB-C подключение'],
      specs: {
        'Переключатели': 'Cherry MX Blue',
        'Корпус': 'Алюминий',
        'Клавиши': 'PBT пластик',
        'Подсветка': 'RGB',
        'Размер': 'Полноразмерная',
        'Подключение': 'USB-C'
      }
    }
  ];
  
  const product = allProducts.find(p => p.id === productId) || {
    id: productId,
    name: `Продукт ${productId}`,
    description: `Подробное описание продукта ${productId}. Это отличный продукт с множеством функций и возможностей.`,
    fullDescription: `Полное описание продукта ${productId}. Этот продукт сочетает в себе инновационные технологии и проверенное качество.`,
    price: `${productId}00₴`,
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop',
    category: 'Электроника',
    rating: 4.5,
    features: ['Высокое качество', 'Долговечность', 'Современный дизайн', 'Простота использования'],
    specs: {
      'Качество': 'Премиум',
      'Гарантия': '2 года',
      'Дизайн': 'Современный',
      'Использование': 'Простое'
    }
  };

    return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ mt: { xs: 2, sm: 4 }, mb: { xs: 2, sm: 4 } }}>
          <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {/* Изображение продукта */}
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.image}
                  alt={product.name}
                  sx={{ 
                    objectFit: 'cover',
                    borderRadius: 2,
                    width: '100%'
                  }}
                />
              </Grid>
              
              {/* Информация о продукте */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography 
                      variant="h4" 
                      component="h1"
                      sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
                    >
                      {product.name}
                    </Typography>
                    <Chip 
                      label={product.category} 
                      color="primary" 
                      variant="outlined"
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating 
                      value={product.rating} 
                      precision={0.1} 
                      size="large" 
                      readOnly 
                      sx={{ mr: 2 }}
                    />
                    <Typography variant="h6" color="text.secondary">
                      {product.rating}
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="h4" 
                    color="primary"
                    sx={{ 
                      fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                      fontWeight: 'bold',
                      mb: 3
                    }}
                  >
                    {product.price}
                  </Typography>
                </Box>
                
                                 <Typography 
                   variant="body1" 
                   paragraph
                   sx={{ 
                     fontSize: { xs: '0.9rem', sm: '1rem' },
                     lineHeight: 1.6,
                     mb: 3
                   }}
                 >
                   {product.fullDescription}
                 </Typography>
                 
                 <Button
                   variant="outlined"
                   size="large"
                   onClick={() => navigate('/products')}
                   sx={{ px: 4, py: 1.5 }}
                 >
                   Назад к списку
                 </Button>
              </Grid>
            </Grid>
            
            {/* Характеристики */}
            <Box sx={{ mt: 4 }}>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
              >
                Характеристики:
              </Typography>
              
              <Grid container spacing={2}>
                {Object.entries(product.specs).map(([key, value]) => (
                  <Grid item xs={12} sm={6} key={key}>
                    <Box sx={{ 
                      p: 2, 
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      backgroundColor: 'background.paper'
                    }}>
                      <Typography variant="subtitle2" color="primary" gutterBottom>
                        {key}
                      </Typography>
                      <Typography variant="body2">
                        {value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
            
            {/* Особенности */}
            <Box sx={{ mt: 4 }}>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
              >
                Особенности:
              </Typography>
              
              <Grid container spacing={1}>
                {product.features.map((feature, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Chip
                      label={feature}
                      variant="outlined"
                      sx={{ 
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        width: '100%',
                        justifyContent: 'flex-start'
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

function Products() {
  // Вложенные маршруты для продуктов
  const routes = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/:id',
      element: <ProductDetail />
    }
  ]);

  return routes;
}

export default Products; 