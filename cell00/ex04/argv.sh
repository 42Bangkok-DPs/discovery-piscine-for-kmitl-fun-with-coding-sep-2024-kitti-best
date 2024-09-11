if [ -z $1 ]
then
	echo -n "No arguments supplied"
else
	if [ ! -z $1 ]
	then
		echo -n $1
	fi
	if [ ! -z $2 ]
	then
		echo
		echo -n $2
	fi
	if [ ! -z $3 ]
	then
		echo
		echo -n $3
	fi
fi
