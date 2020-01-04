<?php 

function buatSegitiga($ukuran) 
{ 
      if($ukuran < 3){
        printf("Input ukuran tidak valid!");
    } else if($ukuran%2 == 0 ) {
        printf("Input ukuran tidak boleh genap!");
    }
    else {
	$k = 0; 
	
	for ($i = 1; $i <= $ukuran; $i++) 
	{ 
		for ($j = $i; $j < $ukuran; $j++) 
		{ 
			echo " "; 
		} 
		while ($k != (2 * $i - 1)) 
		{ 
			if ($k == 0 || $k == 2 * 
							$i - 2) 
				echo "*"; 
			else
				echo " "; 
			$k++; 
		} 
		$k = 0; 
		
		echo "\n"; 
	} 
	
	for ($i = 0; $i < 2 * $ukuran - 1; $i++) 
	{ 
		echo "*"; 
	} 
	
    }
} 

// Set ukuran segitiga (tidak boleh angka ganjil atau kurang dari 3)
$ukuran = 14; 
buatSegitiga($ukuran);

?>