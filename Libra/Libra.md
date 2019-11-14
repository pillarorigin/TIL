[Libra Doc] :https://developers.libra.org/docs/my-first-transaction

Currently available for macOS and Linux. => vmware workstation 사용

```
git clone https://github.com/libra/libra.git && cd libra

```
git checkout testnet

```
./scripts/dev_setup.sh

```
./scripts/cli/start_cli_testnet.sh

```
    Finished dev [unoptimized + debuginfo] target(s) in 5m 49s
     Running `target/debug/client --host ac.testnet.libra.org --port 8000 -s ./scripts/cli/consensus_peers.config.toml`
Connected to validator at: ac.testnet.libra.org:8000
usage: <command> <args>

Use the following commands:

account | a 
	Account operations
query | q 
	Query operations
transfer | transferb | t | tb 
	<sender_account_address>|<sender_account_ref_id> <receiver_account_address>|<receiver_account_ref_id> <number_of_coins> [gas_unit_price_in_micro_libras (default=0)] [max_gas_amount_in_micro_libras (default 140000)] Suffix 'b' is for blocking. 
	Transfer coins (in libra) from account to another.
help | h 
	Prints this help
quit | q! 
	Exit this client



논리력, 추상화 능력
